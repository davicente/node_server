import { config } from 'dotenv';
config();
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const runServer = async (): Promise<void> => {
    const app = express();
    app.server = createServer(app);

    // aplying CORS
    var corsOptions = {
        exposedHeaders: ['Link']
    };
    app.use(cors(corsOptions));

    // load api routes
    const routes = require('./api/routes');

    // 3rd party middleware
    // configure app to use bodyParser()
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: process.env.BODY_LIMIT }));

    // api router
    app.use(process.env.API_PATH, routes.initializeAPI());

    app.server.listen(process.env.SERVER_PORT, () => {
        console.log(`Started on port ${app.server.address().port}`);
    });
};


runServer();
