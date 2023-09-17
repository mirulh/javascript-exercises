const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((prev, next) => prev * next); //don't set initial with 0 cuz anything multiply 0 will be 0
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// alternative

// const factorial = function (n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else if (n > 1) {
//     for (let i = n; i > 0; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   } else {
//     return "number has to be positive";
//   }
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
