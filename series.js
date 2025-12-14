async function series(arr){
    let res = []
    for (func of arr){
        res.push(await Promise.resolve(func))
    }
    return res
}