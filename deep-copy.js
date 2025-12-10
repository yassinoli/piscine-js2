function deepCopy(obj){
    let res 
    if (Array.isArray(obj)){
        for(let i=0 ; i<obj.length; i++){
            if (obj[i] instanceof Array){
                res.push(deepCopy(obj[i]))
            }else{
                res.push(obj[i])
            }
        }
    }else{
        for(let ky of Object.keys(obj)){
            if (typeof obj[ky] === 'object'){
               res[ky] = deepCopy(obj[ky])
            }else{
                res[ky] = obj[ky]
            }
        }
    }
    return res

}