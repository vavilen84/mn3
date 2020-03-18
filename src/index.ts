import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// initialize configuration
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;


app.post('/images', (req, res) => {
    // tslint:disable-next-line:no-console
    console.log( req.body );
})
// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );