const removeFromArray = function (inputArr, ...toRemove) {
  return inputArr.filter((item) => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
