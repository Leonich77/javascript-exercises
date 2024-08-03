const convertToCelsius = function (farTemp) {
  const celTemp = (farTemp - 32) * (5 / 9);
  return Number.isInteger(celTemp)
    ? celTemp
    : Number.parseFloat(celTemp.toFixed(1));
};

const convertToFahrenheit = function (celTemp) {
  const farTemp = celTemp * (9 / 5) + 32;
  return Number.isInteger(farTemp)
    ? farTemp
    : Number.parseFloat(farTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
