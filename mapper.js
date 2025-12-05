function map(arr,func){
    let res = []
    for(let i=0 ; i<arr.length ; i++){
        res[i] = func(arr[i])
    }
    return res
}

function flatMap(arr, func){
    let res = []
    for(let i=0 ; i<arr.length ;i++){
        let x = func(arr[i])
        if (x instanceof Array){
            res.push(...x)
        }else{
            res.push(x)
        }
    }
    return res
}