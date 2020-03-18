import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import { UserController } from './UserController'
import { Request, Response, NextFunction } from 'express'
import { Server } from '@overnightjs/core'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'

// initialize configuration
dotenv.config();



// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());




// app.post('/images', (req, res) => {
//     // tslint:disable-next-line:no-console
//     console.log( req.body );
// })




// start the Express server
// app.listen( port, () => {
//     // tslint:disable-next-line:no-console
//     console.log( `server started at http://localhost:${ port }` );
// } );


export class SampleServer extends Server {

    constructor() {
        super();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        // let loginController = new LoginController();
        const userController = new UserController();

        super.addControllers([userController]);
    }


    public start(port: string) {
        // const p = port;
        this.app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log('Server listening on port: ' + port);
        })
    }
}

const server = new SampleServer();
server.start(process.env.SERVER_PORT);