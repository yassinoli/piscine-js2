function reverse(arr){
    const isStr = (typeof arr==='string')
    let res;

if (isStr) {
    res = "";
} else {
    res = [];
}

    for (let i= arr.length-1 ; i>=0 ; i--){
          if (isStr){
        res+=arr[i]
    }else{
        res.push(arr[i])
    }
    }
    return res
}