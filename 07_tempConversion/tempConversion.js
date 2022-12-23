const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * 0.5556;
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * 1.8) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
