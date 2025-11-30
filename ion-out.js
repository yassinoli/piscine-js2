const ionOut=(str)=>{
    const reg = /tion\b/i

    let arr = str.split(' ')
    let res = []
    arr.forEach(elem=> {
        if (elem.match(reg)){
            res.push(elem.replace(reg,'t'))
        }
    });
    return res
     }

     

