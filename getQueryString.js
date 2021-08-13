/**
 * Get the value of a query string from a URL
 * @param  {String} param The parameter to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
function getQueryString(param, url = window.location) {
  let params = new URL(url).searchParams;
  let val = params.getAll(param);
  if (val.length > 1) return val;
  return val[0];
}

module.exports = {
  getQueryString,
};
