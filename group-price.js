const groupPrice =(str)=>{
    let final =[]
    const reg = /[a-zA-Z]+\d+[.]\d+/g
    const num1 = /\d+(?=[.])/g
    const num2 = /(?<=[.])\d+/g
    let res = str.match(reg)
    
    res.forEach(elem => {
        let sub =[]
        sub.push(elem)
        sub.push(elem.match(num2)[0])
        sub.push(elem.match(num1)[0])
        final.push(sub)
    });
    return final

}

