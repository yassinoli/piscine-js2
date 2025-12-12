function retry(count, callback) {
  return (...args) => {
    while (count > 0) {
      try {
        return callback(...args);
      } catch (err) {
        count--;
      }
    }
  };
}

function timeout(del, callback) {
  return (...args) => {
    return new Promise((res, rej) => {
      setTimeout(async () => {
        try {
          res(await callback(...args));
        } catch (err) {
          rej(err);
        }
      }, del);
    });
  };
}
