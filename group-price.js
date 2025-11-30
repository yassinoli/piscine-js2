const groupPrice =(str)=>{
    let final =[]
    const reg = /[\S]+\d+[.]\d+/g
    const num1 = /\d+(?=[.])/g
    const num2 = /(?<=[.])\d+/g
    let res = str.match(reg)
    if (res){
       
    res.forEach(elem => {
        let sub =[]
        sub.push(elem)
        sub.push(elem.match(num1)[0])
        sub.push(elem.match(num2)[0])
        final.push(sub)
    }); 
    }
   
    return final

}


