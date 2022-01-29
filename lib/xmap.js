const tools = require('../helper/tools')

function xmap(arr, func) {
  const result = [];

  // process the function
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(func(element, i));
  }

  // remove null results
  return tools.removeNulls(result)
}

module.exports = xmap;