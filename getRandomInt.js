/**
 * Get a number bewteen two values.
 * @param {number} min
 * @param {number} max
 */
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rand = Math.random;
const veryRarely = () => Number(rand() > 0.9);
const rarely = () => Number(rand() > 0.75);
const coinFlip = () => Number(rand() > 0.5);

module.exports = {
  getRandomIntInclusive,
};
