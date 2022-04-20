const palindromes = function (input) {
  let parsed = input.replace(/[^a-zA-Z]/g, '');
  parsed = parsed.toLowerCase();
  list = parsed.split('');

  let revString = '';
  for (let i = list.length-1; i >= 0; i--) {
    revString += list[i];
  }
  return revString === parsed;
};

// Do not edit below this line
module.exports = palindromes;
