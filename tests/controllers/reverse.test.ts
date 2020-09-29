import * as reverseController from '../../src/controllers/reverse';
import { expect } from 'chai';

describe('Reverse tests', () => {
    it('Simple reverse', () => {
        const reversed = reverseController.reverse('hello');
        expect(reversed).to.equal('OllEh');
    });

    it('Reverse empty', () => {
        const reversed = reverseController.reverse('');
        expect(reversed).to.equal('');
    });

    it('Reverse only constants', () => {
        const reversed = reverseController.reverse('nwmpyjhgf');
        expect(reversed).to.equal('fghjypmwn');
    });

    it('Reverse only vowels', () => {
        const reversed = reverseController.reverse('aeiou');
        expect(reversed).to.equal('UOIEA');
    });

    it('Reverse long string', () => {
        const reversed = reverseController.reverse('qwertyuioàsdfghjklzxcvbnm');
        expect(reversed).to.equal('mnbvcxzlkjhgfdsApOIUytrEwq');
    });

    it('Reverse one letter string', () => {
        const reversed = reverseController.reverse('a');
        expect(reversed).to.equal('A');
    });
});
