function filterValues(obj , func){
        let res = {}
        Object.keys(obj).forEach((elm) =>{
           if (func(obj[elm])){
            res[elm] = obj[elm]
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



const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37

