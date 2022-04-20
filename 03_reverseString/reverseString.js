const reverseString = function(string) {
  const charList = string.split('');
  let revString = '';
  for (let i = string.length-1; i >= 0; i--) {
    revString += charList[i];
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
