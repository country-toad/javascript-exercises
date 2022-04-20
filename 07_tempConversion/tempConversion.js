const ftoc = function(temp) {
  convert = (temp - 32) * 5 / 9;
  return Math.round(convert * 10) / 10;
};

const ctof = function(temp) {
  convert = temp * 9 / 5 + 32;
  return Math.round(convert * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
