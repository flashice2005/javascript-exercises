const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1)||!Number.isInteger(number2)|| number1 < 0 || number2 < 0) {
        return 'ERROR';
    }
    const difference = Math.abs(number1-number2) + 1;
    const sum = (difference/2) * (number1+number2);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
