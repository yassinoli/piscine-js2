function pick(obj , ...str){
    let res = {}
    for(let key of Object.keys(obj)){
        if (str.includes(key)){
            res[key] = obj[key]
        }
    }
    return res
}

function omit(obj , ...str){
let res = {}
    for(let key of Object.keys(obj)){
        if (!str.includes(key)){
            res[key] = obj[key]
        }
    }
    return res
}

