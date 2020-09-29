import { Router } from 'express';
import { ORDER_VALUES } from '../constants';
import * as countriesController from '../controllers/countries';
import * as reverseController from '../controllers/reverse';
import * as appendController from '../controllers/append';

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
        if (order && !ORDER_VALUES.includes(order)) {
            return res.status(400).send({ message: 'Wrong order' });
        }
        res.send(countriesController.getCountries(filter, order));
    });

    router.get('/reverse/:toReverse', (req, res) => {
        const { toReverse } = req.params;
        res.send(reverseController.reverse(toReverse));
    });

    router.get('/append', (req, res) => {
        const { start, end } = req.query;
        if (start && typeof (start) != 'string') {
            return res.status(400).send({ message: 'Wrong start' });
        }
        if (end && typeof (end) != 'string') {
            return res.status(400).send({ message: 'Wrong end' });
        }
        res.send(appendController.append(start, end));
    });

    return router;
};