function sign(a){
    switch (a){
        case  (a>0) : return 1 ;
        case (a<0) : return -1 ;
        default : return 0
    }
}

function sameSign(a,b){
 if (a*b >= +0 ){
    return true
 }else{
    return false
 }
}