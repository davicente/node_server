import { Router } from 'express';
import { ORDER_VALUES } from '../constants';
import * as countriesController from '../controllers/countries';

exports.initializeAPI = (): void => {
    const router = Router();

    router.get('/helloworld', (req, res) => {
        res.send('hello world');
    });

    router.get('/countries', (req, res) => {
        const { filter, order } = req.query;
        if (filter && typeof (filter) != 'string') {
            return res.status(400).send({ message: 'Wrong filter' });
        }
        if(order && !ORDER_VALUES.includes(order)) {
            return res.status(400).send({ message: 'Wrong order' });
        }
        res.send(countriesController.getCountries(filter, order));
    });

    return router;
};