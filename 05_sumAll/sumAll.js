const sumAll = function (start, end) {
  let sum = 0;
  const startFrom = Math.min(...arguments);
  const endsAt = Math.max(...arguments);

  if (isPositiveNumber(start) && isPositiveNumber(end)) {
    for (let i = startFrom; i <= endsAt; i++) {
      sum += i;
    }

    return sum;
  } else return "ERROR";
};

function isPositiveNumber(param) {
  return typeof param == "number" && param >= 0;
}
// Do not edit below this line
module.exports = sumAll;
