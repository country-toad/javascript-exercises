const sumAll = function(start, end) {
  let finalSum = 0;
  if (start > end) {
    let swap = 0;
    swap = start;
    start = end;
    end = swap;
  }
  for (x = start; x < end + 1; x++) {
    finalSum += x;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
