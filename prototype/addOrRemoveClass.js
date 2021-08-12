/**
 * Usage:
 * document.querySelectorAll('.menu-item').addClass('disabled');
 * document.querySelectorAll('.menu-item').removeClass('disabled');
 *
 * Same as:
 * const menuItems = document.querySelectorAll('.menu-item');
 * menuItems.forEach(el => {
 *   el.addClass('disabled');
 * });
 */

NodeList.prototype.addClass = function (className) {
  this.forEach(el => {
    el.classList.add(className);
  });
};

NodeList.prototype.removeClass = function (className) {
  this.forEach(el => {
    el.classList.remove(className);
  });
};
