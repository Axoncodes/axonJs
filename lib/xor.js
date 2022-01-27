function xor(args) {
  let result;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg !== 'undefined') {
      result = arg;
      break;
    }
  }
  return result;
}

module.exports = xor