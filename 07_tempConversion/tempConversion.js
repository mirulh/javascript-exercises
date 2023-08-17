const convertToCelsius = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  // console.log(celsius);
  let roundCelsius = Math.round(celsius * 10) / 10;
  // console.log(roundCelsius);
  return roundCelsius;
};

const convertToFahrenheit = function (temp) {
  let farenheit = (temp * 9) / 5 + 32;
  // console.log(farenheit);
  let roundFarenheit = Math.round(farenheit * 10) / 10;
  // console.log(roundFarenheit);
  return roundFarenheit;
};

convertToCelsius(32);

// convertToFahrenheit(50);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
