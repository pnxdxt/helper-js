/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */

const grabUTMS = settings => {
  const reset = settings && settings.reset ? settings.reset : false;
  const self = window.location.toString();
  const querystring = self.split('?');
  if (querystring.length > 1) {
    const pairs = querystring[1].split('&');
    for (i in pairs) {
      const keyval = pairs[i].split('=');
      if (reset || sessionStorage.getItem(keyval[0]) === null) {
        sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
      }
    }
  }
};

module.exports = {
  grabUTMS,
};
