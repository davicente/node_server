import { Router } from 'express';

exports.initializeAPI = (): void => {
    const router = Router();

    router.get('/helloworld', (req, res) => {
        res.send('hello world');
    });

    return router;
};