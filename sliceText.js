/**
 * @param {String} text the text to slice
 * @param {Number} count how many characters to keep
 */ 
const sliceText = (text, count) => {
  return text.slice(0, count) + (text.length > count ? '...' : '');
};

module.exports = {
  sliceText,
};
