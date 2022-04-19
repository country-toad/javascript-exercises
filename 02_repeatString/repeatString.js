const repeatString = function(string, repeats) {
  let concat = '';
  if (repeats < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < repeats; i++) {
    concat += string;
  }
  return concat;
};

// Do not edit below this line
module.exports = repeatString;
