function sign(a){
    if (a>0){
        return 1
    }else if (a<0){
        return -1
    }else{
        return 0
    }
}

function sameSign(a,b){
 if (a*b >= +0 ){
    return true
 }else{
    return false
 }
}