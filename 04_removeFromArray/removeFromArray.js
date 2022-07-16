const removeFromArray = function (arr) {
  let argArr = [...arguments].slice(1);

  for (let i = 0; i < arr.length; i++) {
    while (argArr.includes(arr[i])) arr.splice(i, 1);
  }

  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
