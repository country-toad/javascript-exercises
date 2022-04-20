const fibonacci = function(num) {
  if (num < 0) {
    return 'OOPS';
  }
  prevNum = 0;
  currentNum = 1;
  for(i = 2; i < num; i++) {
    let add = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = add;
  }
  return prevNum + currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
