const { expect } = require('chai');

describe('Testing numbers', () => {
    it('1 equal to 1', () => {
        expect(1 === 1).to.be.true;
    });

    it('2 equal to 2', () => {
        expect(2 === 2).to.be.true;
    });

    it.skip('1 equal to 3', () => {
        expect(1 === 3).to.be.true;
    });

    it('3 equal to 3', () => {
        expect(3 === 3).to.be.true;
    });

    it('4 equal to 4', () => {
        expect(4 === 4).to.be.true;
    });

    it('5 equal to 5', () => {
        expect(5 === 5).to.be.true;
    });

    it('6 equal to 6', () => {
        expect(6 === 6).to.be.true;
    });

    it('7 equal to 7', () => {
        expect(7 === 7).to.be.true;
    });
});