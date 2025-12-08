function invert(obj){
    let obj2 = {}

    for (let ky in obj){
        let valu = obj[ky]
        obj2[valu] = ky
    }


    return obj2
}


