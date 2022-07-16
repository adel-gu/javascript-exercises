const ftoc = function (deg) {
  const F = Math.round((deg - 32) * (5 / 9) * 10) / 10;
  return F;
};

const ctof = function (deg) {
  const C = Math.round((deg * (9 / 5) + 32) * 10) / 10;
  return C;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
