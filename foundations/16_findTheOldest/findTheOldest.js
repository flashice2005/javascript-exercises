const findTheOldest = function(array) {
    function findAge(person) {
        let death = person.yearOfDeath;
        let birth = person.yearOfBirth;
        if (!death) {death = (new Date()).getFullYear();}
        return death - birth;
    }
    const sortedArray = array.sort((a, b) => findAge(a) - findAge(b));
    return sortedArray[sortedArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
