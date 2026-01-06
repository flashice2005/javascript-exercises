function roundOneDecimal(number) {
  return Math.round(number*10)/10;
}

const convertToCelsius = function(F) {
  return roundOneDecimal((F-32)*5/9);
};

const convertToFahrenheit = function(C) {
  return roundOneDecimal((9/5*C)+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
