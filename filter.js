function filter(arr , func){
    let res = []
    for(let i = 0 ; i<arr.length ; i++){
        if (func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
return res
}

function reject(arr,func){
     let res = []
    for(let i = 0 ; i<arr.length ; i++){
        if (!func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
return res
}

function partition(arr,func){
     let res = []
     let tmp = []
    for(let i = 0 ; i<arr.length ; i++){
        if (func(arr[i],i,arr)){
            res.push(arr[i])
        }else{
            tmp.push(arr[i])
        }
    }
    res.push(tmp)
return res
}

