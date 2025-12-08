function invert(obj) {
  const result = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    result[value] = key;
  }
  return result;
}
