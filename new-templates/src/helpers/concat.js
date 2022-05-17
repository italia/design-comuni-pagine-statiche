module.exports = (...args) => {
  let str = '';

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'string') str += args[i];
  }

  return str;
};
