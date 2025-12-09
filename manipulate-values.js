function filterValues(obj , func){
        let res = {}
        Object.keys(obj).forEach((elm) =>{
            if (typeof obj[elm] !== 'object'){
                if (func(obj[elm])){
            res[elm] = obj[elm]
           }
            }else{
               res[elm] =  filterValues(obj[elm] , func)
            }
           
        })
        return res
}



function mapValues(obj , func){
    let res = {} 
      Object.keys(obj).forEach((elm) =>{  
            res[elm] = obj[elm]+1
        })
        return res
    }



function reduceValues(obj , func){
  let res = 0 
      Object.keys(obj).forEach((elm) =>{  
           res +=  obj[elm]
        })
        return res
}


