const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should handle addition', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 3.1), 5);
    });
    it('should handle subtraction', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 7.9, 4.6), 3);
    })
    it('should handle division', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 5.7, 2.2), 3);
    })
    it('should handle zero values correctly', function() {
        assert.strictEqual(calculateNumber('SUM', 0, 2.1), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', 8.9, 0), 9);
        assert.strictEqual(calculateNumber('DIVIDE', 9.1, 0), 'Error')
    })
    it('should handle large rounded numbers', function() {
        assert.strictEqual(calculateNumber('SUM', 21.2, 34.8), 56);
        assert.strictEqual(calculateNumber('SUBTRACT', 345.7, 123.1), 223);
        assert.strictEqual(calculateNumber('DIVIDE', 150.2, 75.3), 2);
    })
    it('should handle negative rounded integers', function() {
        assert.strictEqual(calculateNumber('SUM', -1.6, -3.7), -6);
        assert.strictEqual(calculateNumber('SUBTRACT', -7.2, -2.9), -4);
        assert.strictEqual(calculateNumber('DIVIDE', -9.3, 3.1), -3);
    })
})
