function indexOf(arr,elem,j=0){
    for (let x = j ; x<arr.length ; x++){
        if (arr[x]===elem){
            return x
        }
    }
    return -1
}

function lastIndexOf(arr,elem,j = arr.length - 1){
     for ( let x=j ; x>=0 ; x--){
        if (arr[x]===elem){
            return x
        }
    }
    return -1
}

function includes(arr,elem){
     for (let x = 0 ; x<arr.length ; x++){
        if (arr[x]===elem){
            return true
        }
    }
    return false
}
