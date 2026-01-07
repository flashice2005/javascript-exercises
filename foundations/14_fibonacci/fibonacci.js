const fibonacci = function(n) {
    if (n < 0) {return 'OOPS'};
    const fArray = [0, 1];
    if (n == 0 || n == 1) {return fArray[Number(n)]};
    for (let i = 2; i <= Number(n); i++) {
        fArray[i] = fArray[i-1] + fArray[i-2];
    }
    return fArray[Number(n)];
};

// Do not edit below this line
module.exports = fibonacci;
