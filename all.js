async function all(obj){
 let res = {}
    for(let k in obj){
      res[k]   =  await Promise.resolve(obj[k])
    }
    
}