const ionOut=(str)=>{
    const reg = /tion$/i

    let arr = str.split(' ')
    let res = []
    arr.forEach(elem=> {
        if (elem.match(reg)){
            res.push(elem.slice(0,-3))
        }
    });
    return res
     }

     

