/**
 * Usage:
 * aRandomNumber.between(aSmallNumber, aBigNumber);
 */ 

Number.prototype.between = function (a, b) {
  const min = Math.min.apply(Math, [a, b]);
  const max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
