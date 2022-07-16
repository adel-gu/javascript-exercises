const reverseString = function (string) {
  let letters = string.split("");
  let reversedLatters = [];
  let output = "";

  for (let i = letters.length - 1; i >= 0; i--) {
    reversedLatters.push(letters[i]);
  }

  output = reversedLatters.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
