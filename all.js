function all(obj){
    if(!obj){
        return undefined
    }
    let ky = Object.valus(obj)
    return Promise.all([...ky])
}