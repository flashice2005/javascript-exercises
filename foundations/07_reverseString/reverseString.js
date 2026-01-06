const reverseString = function(string) {
    const len = string.length;
    let newString = '';
    for (let i = 0; i < len; i++) {
        newString += string.charAt(len-1-i)
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
