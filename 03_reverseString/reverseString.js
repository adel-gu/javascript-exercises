const reverseString = function (string) {
  let latters = string.split("");
  let reversedLatters = [];
  let output = "";

  for (let i = latters.length - 1; i >= 0; i--) {
    reversedLatters.push(latters[i]);
  }

  output = reversedLatters.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
