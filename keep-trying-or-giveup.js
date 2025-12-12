function retry(count, callback) {
  return (...args) => {
    let lastErr;
    for (let i = count; i > 0; i--) {
      try {
        return callback(...args);
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr;
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
