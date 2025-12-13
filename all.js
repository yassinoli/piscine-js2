function all(obj={}){
    if(!obj){
        return {}
    }
    let ky = Object.valus(obj)
    return Promise.all([...ky])
}