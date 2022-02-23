const tools = require('../helper/tools')

function xif(input, condition, get, root) {
  let type = '';
  if(condition.indexOf('.') >= 0) type = 'object';

  // compare the type of input and the way that the condition has been set
  if(type && type != typeof input) return false;

  let data = tools.exploit(
    condition.replace(/[.]/g, ' '),
    /[ ]/g
  );

  let element = input;
  const rootEl = element
  let result = true;
  // skip the first step with i=1 since the input.input doesn't make sense
  for (let i = 1; i < data.length; i++) {
    if (!element[data[i]]) {
      result = false;
      break;
    }
    else element = element[data[i]];
  }
  return result ? (get ? element : (root ? rootEl : result)) : null
}

module.exports = xif