function map(arr,func){
    let res = []
    for(let i=0 ; i<arr.length ; i++){
        res.push(func(arr[i],i,arr))
    }
    return res
}


function flatMap(arr, func) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const x = func(arr[i], i, arr);
        if (Array.isArray(x)) {
            res.push(...x);
        } else {
            res.push(x);
        }
    }
    return res;
}


