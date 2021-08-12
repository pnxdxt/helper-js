/**
 * Usage:
 * const url = 'http://example.com/movies.json'
 *
 * fetch(url)
 *  .then(getResponse)
 *  .then(processJSON);
 */

function getResponse(response) {
  return response.json();
}

function processJSON(jsonObject) {
  console.log(jsonObject);
}

/**
 * Usage:
 * const url = 'http://example.com/user'
 *
 * fetch(url, writeServer("POST", newMovie))
 *  .then(getResponse)
 *  .then(processJSON);
 */

function writeServer(action, data = {}) {
  return {
    method: action,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };
}
