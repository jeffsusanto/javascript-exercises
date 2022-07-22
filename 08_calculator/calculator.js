const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (num1, num2) {
  let sum = 1
  for (let i = 0; i < num2; i++) {
    sum *= num1
  }
  return sum;
};

const factorial = function (num) {
  let sum
  if (num === 0) {
    return 1
  }
  sum = 1
  for (let i = num; i > 0; i--) {
    sum *= i
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
