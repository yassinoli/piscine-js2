function slice(str, start, idx = str.length - 1) {
  let isString = typeof str === "string";
  let result;

  if (isString) {
    result = "";
  } else {
    result = [];
  }

  for (let i = start; i <= idx; i++) {
    if (isString) {
      result += str[i];
    } else {
      result.push(str[i]);
    }
  }

  return result;
}

