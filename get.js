function get(src, path) {
  return path.split('.').reduce((obj, key) => {
    if (obj && typeof obj === 'object') {
      return obj[key];
    }
  }, src);
}

