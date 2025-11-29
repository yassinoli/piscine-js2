function get(src, path) {
  if (!path) return src;
  
  return path.split('.').reduce((obj, key) => {
    return (obj && obj[key] !== undefined) ? obj[key] : undefined;
  }, src);
}
