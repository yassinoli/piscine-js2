chunk = (arr , n) =>{
    let res = []
    for (let i=0 ; i<arr.length ; i+=n){
        res.push(arr.slice(i,n+i))
        
    }
    return res
}

