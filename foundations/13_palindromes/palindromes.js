const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    const len = newString.length;

    
    for (let i = 0; i < Math.floor(len/2); i++) {
        if (newString[i] !== newString[len-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
