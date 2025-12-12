function retry(count, callback) {
  return async (...args) => {
    let c = count+1
     while(c>0) {try {
        return await callback(...args);
      } catch (err) {
         c--
        if (c===0) throw new Error(err.message)
           
      }}
    
  };
}



function timeout(del, callback) {
  return (...args) => {
    return new Promise((res, rej) => {
      const timer = setTimeout(() => {
        rej(new Error("timeout"));
      }, del);
      Promise.resolve(callback(...args))
        .then(v => {
          clearTimeout(timer);
          res(v);
        })
        .catch(err => {
          clearTimeout(timer);
          rej(err);
        });

    });
  };
}


