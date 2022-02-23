const xif = require('./xif')
const xmap = require('./xmap')

function xmapIf(arr, condition, root=false) {
  return xmap(arr, input => xif(input, condition, true, root))
}

module.exports = xmapIf;