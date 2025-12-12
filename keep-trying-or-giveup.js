function retry(count, callback) {
  return (...args) => {
      try {
        return callback(...args);
      } catch (err) {
            if (count===1){return err}
        count--;
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
