function split(str,elem){
    let res = []
     let tmp = ""
    for (let i=0; i<=str.length ;i++){
       
        if (str[i]===elem || i===str.length){
            res.push(tmp)
            tmp = ""
            continue
        }
        tmp += str[i]

    }
    return res
}

