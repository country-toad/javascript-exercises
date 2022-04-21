const caesar = function(input, shift) {
  shift = shift % 26;
  let newCharCode = input.charCodeAt(0) + shift;
  return String.fromCharCode(newCharCode);








  /*for (char = 0; char < string.length; char++) {
    let charCode = string.charCodeAt(char);
    if (charCode >= 65 && charCode <= 90) { // between a-z
      newChar = charCode + shift;
       if (newChar > 90) {
         shiftString += String.fromCharCode(newChar + 64);
       }
       if (newChar < 65) {
         shiftString += String.fromCharCode(newChar - 91;)
       }
    } 
  }*/


};

/*
65 - 90
97 - 122 */
// Do not edit below this line
module.exports = caesar;
