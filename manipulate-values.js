function filterValues(obj , func){
        let arr = Object.entries(obj)
        let result = arr.filter(([key , val])=>
            func(val)
        )
        return Object.fromEntries(result)
}



function mapValues(obj , func){
    let arr = Object.entries(obj)
        let result = arr.map(([key , val])=>
           [key , func(val)]  
        )
        return Object.fromEntries(result)
    }



function reduceValues(obj , func , acc1=0){
     let arr =[acc1]
     arr.push(...Object.values(obj))
        let result = arr.reduce(( val , acc )=>
           func(val , acc  ) 
        )
        return result
    }


  