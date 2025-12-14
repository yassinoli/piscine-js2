async function series(arr){
    let res = []
    for (let func of arr){
        res.push(await func())
    }
    return res
}