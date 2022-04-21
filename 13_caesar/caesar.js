const caesar = function(input, shift) {
  shift = shift % 26;
  let output = '';
  for (i = 0; i < input.length; i++) {
    let newChar = input.charCodeAt(i) + shift;
    if (/[A-Z]/.test(input.charAt(i))) { 
      if (newChar > 90) {
        newChar -= 26;
      } else if (newChar< 65) {
        newChar += 26;
      }
      output += String.fromCharCode(newChar);
    } 
    else if (/[a-z]/.test(input.charAt(i))) {
      if (newChar > 122) {
        newChar -= 26;
      } else if (newChar< 97) {
        newChar += 26;
      }
      output += String.fromCharCode(newChar);
    } 
    else {
      output += input.charAt(i);
    }
  }
  return output;
};

// Do not edit below this line
module.exports = caesar;
