const repeatString = function(word, times) {
    if (times === 0) {return '';}
    else if (word === '') {return '';}
    else if (times < 0) {return 'ERROR';}
    let finalString = '';
    for (let i = 0; i < times; i++) {
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
