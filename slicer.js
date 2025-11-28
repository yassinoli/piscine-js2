function slice(str, start, idx = str.length) {
  if (start < 0) start = str.length + start;
  if (start < 0) start = 0;
  if (idx < 0) idx = str.length + idx;

  if (idx > str.length) idx = str.length;

  
 let isString = typeof str === "string";
  let result;

  if (isString) {
    result = "";
  } else {
    result = [];
  }

  for (let i = start; i < idx; i++) {
    if (isString) {
      result += str[i];
    } else {
      result.push(str[i]);
    }
  }

  return result;
}

console.log(slice("hello", 2));  

