const repeatString = function (string, num) {
  if (typeof string !== "string" || string === " " || typeof num !== "number") {
    return "";
  }
  if (num < 0) {
    return "ERROR";
  } else if (num < 1) {
    return "";
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
