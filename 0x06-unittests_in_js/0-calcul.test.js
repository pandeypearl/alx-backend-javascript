const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(2.0, 3.0), 5);
    });

    it('rounding down a\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.3, 2.0), 3);
    });

    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(2.0, 2.4), 4);
    });

    it('rounding down a and b\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(1.3, 2.3), 3);
    });

    it('rounding up a\'s floating floating point fractional number', () => {
        assert.strictEqual(calculateNumber(2.7, 3.0), 6);
    });

    it('rounding up b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(2.0, 2.6), 5);
    });

    it('rounding up a and b\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.9), 6);
    });

    it('rounding down a and b\'s floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(3.499999, 4.499999), 7);
    });
})