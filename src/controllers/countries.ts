import { COUNTRIES_LIST, ORDER_ASC, ORDER_DESC } from '../constants';
import { Country } from '../types/country.types';


export function getCountries(filter: string = '', order: string = ''): Country[] {
    let countries = filter ? COUNTRIES_LIST.filter(country => country.country.toLowerCase().includes(filter.toLowerCase()) || country.code.toLowerCase().includes(filter.toLowerCase())) : COUNTRIES_LIST;
    countries = order ? countries.sort((a, b) => order == ORDER_ASC ? a.vat - b.vat : b.vat - a.vat) : countries;
    return countries;
};