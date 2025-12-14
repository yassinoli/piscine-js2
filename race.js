function race(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) return;

        arr.forEach(item => {
            Promise.resolve(item).then(resolve, reject);
        });
    });
}

function some(arr, count) {
    return new Promise((resolve, reject) => {
        if ( arr.length === 0 || count === 0) {
            return resolve(undefined);
        }
        const results = [];
        let don = 0;
        let rej = 0;
        arr.forEach(item => {
            Promise.resolve(item)
                .then(value => {
                    if (don < count) {
                        results.push(value);
                        don++;

                        if (don === count) {
                            resolve(results);
                        }
                    }
                })
                .catch(err => {
                    rej++;
                    if (rej > arr.length - count) {
                        reject(new AggregateError(
                            [err],
                            "Not enough promises don"
                        ));
                    }
                });
        });
    });
}

