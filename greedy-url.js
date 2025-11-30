const  getURL =(str)=>{
    const reg = /https?:\/\/[\S]+/g
    return str.match(reg) || []
}

const greedyQuery = (str)=>{
    let arr = []
    const reg1 = /&/g
     const reg = /https?:\/\/[\S]+/g
     let res =  str.match(reg)
     res.forEach(element => {
        if(element.match(reg1) && element.match(reg1).length>=3){
            arr.push(element)
        }
     });
     return arr
}

const notSoGreedy =(str)=>{
  let arr = []
    const reg1 = /&/g
     const reg = /https?:\/\/[\S]+/g
     let res =  str.match(reg)
     res.forEach(element => {
        if(element.match(reg1) && element.match(reg1).length>=1 &&  element.match(reg1).length<=3){
            arr.push(element)
        }
     });
     return arr
}


