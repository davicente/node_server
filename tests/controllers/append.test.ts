import * as appendController from '../../src/controllers/append';
import { expect } from 'chai';

describe('Append tests', () => {
    let simpleArray;

    beforeAll(() => {
        const simpleArrayContent = process.env.SIMPLE_ARRAY;
        if(simpleArrayContent) {
            simpleArray = simpleArrayContent.split(',');
        }
    });

    it('Append start and end', () => {
        const result = appendController.append('hello', 'bye');
        expect(result).to.have.deep.members(['hello', ...simpleArray, 'bye']);
    });

    it('Append only start', () => {
        const result = appendController.append('hello');
        expect(result).to.have.deep.members(['hello', ...simpleArray]);
    });

    it('Append only end', () => {
        const result = appendController.append('', 'bye');
        expect(result).to.have.deep.members([...simpleArray, 'bye']);
    });

    it('Append none', () => {
        const result = appendController.append('', '');
        expect(result).to.have.deep.members([...simpleArray]);
    });
});
