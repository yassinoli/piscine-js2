function race(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) return;

        arr.forEach(item => {
            Promise.resolve(item).then(resolve, reject);
        });
    });
}

function some(arr, c) {
    return new Promise((resolve, reject) => {
        if ( arr.length === 0 || c === 0) {
            return resolve([]);
        }
        const results = [];
        let don = 0;
        let rej = 0;
        arr.forEach(item => {
            Promise.resolve(item)
            .then(value => {
             if (don < c) {
              results.push(value);
              don++;
              if (don === c) {
                  resolve(results.reverse());
              }
             }
                })
                .catch(err => {
                    rej++;
                    if (rej > arr.length - c) {
                        reject( Error("error"));
                    }
                });
        });
    });
}

