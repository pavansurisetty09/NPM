const _ = require("lodash");

const numbers = [31, 23, 56, 45, 89, 4];

_.each(numbers, function (number, index) {
  console.log(number);
});
