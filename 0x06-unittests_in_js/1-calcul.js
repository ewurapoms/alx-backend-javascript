function calculateNumber(type, a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);
    let result;
    if (type === 'SUM') {
        result = rounded_a + rounded_b;
    } else if (type === 'SUBTRACT') {
        result = rounded_a - rounded_b;
    } else if (type === 'DIVIDE') {
        if (rounded_b === 0) {
            return 'Error';
        }
        result = rounded_a / rounded_b
    }
    return result;
    
}

module.exports = calculateNumber;
