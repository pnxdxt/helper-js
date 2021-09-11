/**
 * Counts the occurrences of a value in an array
 * @param {Array} arr
 * @param {any} val
 */
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * Removes false values from an array
 * @param {Array} arr
 */
const compact = arr => arr.filter(Boolean);

/**
 * Converts a non-array value into array
 * @param {Array} arr
 */
const castArray = val => (Array.isArray(val) ? val : [val]);

/**
 * Converts the elements that don’t have commas or double quotes to strings with comma-separated values
 * @param {Array} arr
 * @param {String} delimiter
 */
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

/**
 * Returns true if the predicate function returns true for all elements in a collection and false otherwise
 * @param {Array} arr
 * @param {Function} fn
 */
const all = (arr, fn = Boolean) => arr.every(fn);

/**
 * Checks whether all elements of the array are equal
 * @param {Array} arr
 */
const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * Removes duplicate values in an array
 * @param {Array} arr
 */
const filterNonUnique = arr => [...new Set(arr)];

/**
 * Return an array of elements that appear in two arrays
 * @param {Array} arr
 * @param {Array} values
 */
const similarity = (arr, values) => arr.filter(v => values.includes(v));

/**
 * Returns the average of two or more numerical values
 */
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
