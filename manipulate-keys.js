function filterKeys(obj , func){
        let arr = Object.entries(obj)
        let result = arr.filter(([key , val])=>
            func(key)
        )
        return Object.fromEntries(result)
}



function mapKeys(obj , func){
    let arr = Object.entries(obj)
        let result = arr.map(([key , val])=>
           [func(key) , val]  
        )
        return Object.fromEntries(result)
    }


function reduceKeys(obj, func, acc1) {
  let  keys = Object.keys(obj);
    if (acc1 === undefined) {
        acc1 = keys.shift()
    }
  const result = keys.reduce((acc, key) => {
    return func(acc, key);
  }, acc1);

  return result;
}
