const sumAll = function(start, end) {
  if (typeof start !== typeof 1 || typeof end !== typeof 1 || start < 0 || end < 0) {
    return 'ERROR';
  }

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
