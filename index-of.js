function indexOf(arr,elem,j){
    for (x = j ; x<arr.length ; x++){
        if (arr[x]===elem){
            return x
        }
    }
    return -1
}

function lastIndexOf(arr,elem,j){
     for ( x=arr.length-1 ; x>j ; x++){
        if (arr[x]===elem){
            return x
        }
    }
    return -1
}

function includes(arr,elem){
     for (x = 0 ; x<arr.length ; x++){
        if (arr[x]===elem){
            return true
        }
    }
    return false
}