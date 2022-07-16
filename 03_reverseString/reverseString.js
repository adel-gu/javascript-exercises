const reverseString = function (string) {
  let letters = string.split("");
  let reversedLetters = [];
  let output = "";

  for (let i = letters.length - 1; i >= 0; i--) {
    reversedLetters.push(letters[i]);
  }

  output = reversedLetters.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
