/**
 * Remove duplicate items from an array
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
function dedupe(arr) {
  return Array.from(new Set(arr));
}

module.exports = {
  dedupe,
};
