const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (x of arr) {
    sum += x;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (x of arr) {
    product *= x;
  }
  return product;
};

const power = function(base, exponent) {
  let result = base;
	for (x = 1; x < exponent; x++) {
    result *= base;
  }
  return result;
};

const factorial = function() {
	
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
