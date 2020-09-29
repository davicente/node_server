import { VOWELS } from '../constants';

export function reverse(toReverse: string): string {
    return toReverse.split('').map(letter => VOWELS.includes(letter) ? letter.toUpperCase(): letter).reverse().join('');
};