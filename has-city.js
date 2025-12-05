function hasCity(str,arr){
    return function(city){
       if  (arr.includes(city) === true){
        return `${city} is a city from ${str}`
       }else{
         return `${city} is not a city from ${str}`
       }
    }
}