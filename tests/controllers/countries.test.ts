import * as countriesController from '../../src/controllers/countries';
import { COUNTRIES_LIST, ORDER_VALUES, ORDER_DESC, ORDER_ASC } from '../../src/constants';
import { Country } from '../../src/types/country.types';

import { expect } from 'chai';

describe('Countries tests', () => {
    it('Get all countries', () => {
        const countries = countriesController.getCountries();
        expect(countries).to.have.deep.members(COUNTRIES_LIST);
    });

    it('Get countries filtering', () => {
        const countries = countriesController.getCountries('de');
        expect(countries).to.have.deep.members([{ "country": "Denmark", "code": "DK", "vat": 25 }, { "country": "Germany", "code": "DE", "vat": 19 }, { "country": "Sweden", "code": "SW", "vat": 25 }]);
    });

    it('Get countries filtering without any result', () => {
        const countries = countriesController.getCountries('none');
        expect(countries.length).to.equal(0);
    });

    it('Get countries ascending order', () => {
        const countries = countriesController.getCountries('', ORDER_ASC);
        expect(countries).to.have.deep.members(COUNTRIES_LIST);
        expect(true).to.equal(checkAscendingOrder(countries));
    });

    it('Get countries descending order', () => {
        const countries = countriesController.getCountries('', ORDER_DESC);
        expect(countries).to.have.deep.members(COUNTRIES_LIST);
        expect(true).to.equal(checkDescendingOrder(countries));
    });

    it('Get countries filtering and ascending order', () => {
        const countries = countriesController.getCountries('and', ORDER_ASC);
        expect(countries).to.have.deep.members([{ "country": "Finland", "code": "FI", "vat": 24 }, { "country": "Ireland", "code": "IE", "vat": 23 }, { "country": "Netherlands", "code": "NL", "vat": 21 }, { "country": "Poland", "code": "PO", "vat": 23 }]);
        expect(true).to.equal(checkAscendingOrder(countries));
    });

    it('Get countries filtering and descending order', () => {
        const countries = countriesController.getCountries('and', ORDER_DESC);
        expect(countries).to.have.deep.members([{ "country": "Finland", "code": "FI", "vat": 24 }, { "country": "Ireland", "code": "IE", "vat": 23 }, { "country": "Netherlands", "code": "NL", "vat": 21 }, { "country": "Poland", "code": "PO", "vat": 23 }]);
        expect(true).to.equal(checkDescendingOrder(countries));
    });
});

const checkAscendingOrder = (countries: Country[]): boolean => {
    let prevVat = Number.MIN_SAFE_INTEGER;
    return countries.every((country) => {
        const gte = country.vat >= prevVat;
        prevVat = country.vat;
        return gte;
    });
};

const checkDescendingOrder = (countries: Country[]): boolean => {
    let prevVat = Number.MAX_SAFE_INTEGER;
    return countries.every((country) => {
        const lte = country.vat <= prevVat;
        prevVat = country.vat;
        return lte;
    });
};
