import dotenv from "dotenv";
import bodyParser from "body-parser";
import {Server} from '@overnightjs/core'

import {ImagesController} from './controllers/ImagesController'

export class App extends Server {

    constructor() {
        super();
        this.initializeBodyParser();
        this.initializeControllers();
        this.initializeConfig();
    }

    private initializeConfig() {
        dotenv.config();
    }

    private initializeControllers() {
        const userController = new ImagesController();
        super.addControllers([userController]);
    }

    private initializeBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    public start(port: string) {
        this.app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log('Server listening on port: ' + port);
        })
    }
}

const app = new App();
app.start(process.env.SERVER_PORT);