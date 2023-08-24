const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {     
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 3.0, 3.0), 6);
        });

        it('equal positive numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUM', 3.2, 2.8), 6);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -3.0, -3.0), -6);
        });

        it('equal negative numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUM', -3.2, -2.8), -6);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -3.0, 3.0), 0);
        });

        it('positive and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 3.0, -3.0), 0);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });

    });

    describe('type == "SUBTRACT"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 3.0), 0);
        });

        it('equal positive numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 2.8), 0);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -3.0), 0);
        });

        it('equal negative numbers (alternate)', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.2, -2.8), 0);
        });

        it('negative and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.0, 3.0), -6);
        });

        it('positive and positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.0, -3.0), 6);
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
        });

    });

    describe('type == "DIVIDE"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6.0, 2.0), 3.0);
        });

        it('numbers with different signs', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 2.0), -2.5);
        });

        it('numbers with different signs (alternate)', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, -2.0), -2.5);
        });

        it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, -2.0), 2.5);
        });

        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
        });

        it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
        });

        it('equal rounded up numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3.6, 4.0), 1);
        });

        it('equal rounded down numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3.4, 3.0), 1);
        });

        it('0 and positive number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 4.0), 0);
        });

        it('0 and negative number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, -4.0), -0);
        });

        it('positive number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
        });

        it('negative number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
        });

        it('positive number and rounded down to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
        });

        it('negative number and rounded down to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
        });

        it('positive number and rounded up to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
        });

        it('negative number and rounded up to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
        });

        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
        });
    });
});