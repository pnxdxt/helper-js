/**
 * Checks whether an element has a particular class
 * @param {Node} el
 * @param {String} className
 * @return {Boolean}
 */
const hasClass = (el, className) => el.classList.contains(className);

/**
 * Toggle a class for an element
 * @param {Node} el
 * @param {String} className
 */
const toggleClass = (el, className) => el.classList.toggle(className);

/**
 * Get the value of a CSS rule for a particular element
 * @param {Node} el
 * @param {String} ruleName
 */
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
