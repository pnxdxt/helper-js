/**
 * Flattens an array recursively
 * @param {Array} arr
 */
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 * Flattens an array up to a specified depth using recursion
 * @param {Array} arr
 * @param {Number} depth
 */
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

const sortBy = (arr, p) =>
  arr.slice(0).sort(function (a, b) {
    return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
  });

Array.prototype.sortBy = function (p) {
  return this.slice(0).sort(function (a, b) {
    return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
  });
};

const slice = (arr, n, i) => Array.prototype.slice.call(arr, n, i);

const flattenArray = (arr, i, result) => {
  while (++i < arr.length) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], -1, result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const flatten = arr => {
  let i = -1;
  while (++i < arr.length) {
    if (Array.isArray(arr[i])) {
      const result = slice(arr, 0, i);
      flattenArray(arr[i], -1, result);
      return flattenArray(arr, i, result);
    }
  }
  return arr;
};
