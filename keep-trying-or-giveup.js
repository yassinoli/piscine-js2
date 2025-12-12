function retry(count, callback) {
  return async (...args) => {
    let c = count
     while(c>0) {try {
        return await callback(...args);
      } catch (err) {
          c--
        if (c===0) throw new Error("failed")
          
      }}
    
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


