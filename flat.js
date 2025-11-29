function flat(arr, depth = 1) {
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      tmp.push(...flat(arr[i], depth - 1));
    } else {
      tmp.push(arr[i]);
    }
  }

  return tmp;
}
