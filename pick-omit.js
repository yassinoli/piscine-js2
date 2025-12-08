function pick(obj , str){


    let res = {}

    if (Array.isArray(str)){
         for(let key of Object.keys(obj)){
        if (str.includes(key)){
            res[key] = obj[key]
        }
    }
    return res
    }else{
        for(let key of Object.keys(obj)){
        if (str == key){
            res[key] = obj[key]
        }
    }
    return res
    }

    
}

function omit(obj , str){
 let res = {}

    if (Array.isArray(str)){
         for(let key of Object.keys(obj)){
        if (!str.includes(key)){
            res[key] = obj[key]
        }
    }
    return res
    }else{
        for(let key of Object.keys(obj)){
        if (str != key){
            res[key] = obj[key]
        }
    }
    return res
    }
}

console.log(pick({ha:2 , a:3},["h" , "a"]));
