function all(obj){
 
    return new Promise((res , rej)=>{
        const ky = Object.keys(obj)
    const result = {}
    let rem = ky.length
    if(rem===0){
        res(result)
        return
    }
    for (const k of ky){
        res(obj[k]).then(val =>{ 
            result[k]=val
           rem--
           if (rem===0){
            res(result)
           }
        }).catch(rej)
    }
    })
    
}