function round(x){
   let intPrt = 0
    let sgn = 1
      if (x < 0) {
        sgn = -1;
        x = -x;
    }
    
    while (x >= 1) {
        intPrt++;
        x -= 1;
    }
 let  frcPrt = x
  if (frcPrt >= 0.5) {
        intPrt++;
    }
    
    return intPrt*sgn

}




function ceil(x){
    let intPrt = 0
    let sgn = 1
      if (x < 0) {
        sgn = -1;
        x = -x;
    }
    
    while (x >= 1) {
        intPrt++;
        x -= 1;
    }
 
 if( sgn === 1){
            return intPrt+1
        }else{
            return -intPrt
        }
}


function floor(x) {
    let intPart = 0;
    let sign = 1;

    if (x < 0) {
        sign = -1;
        x = -x;
    }
    
    while (x >= 1) {
        intPart++;
        x -= 1;
    }

    if (x === 0) {
        if( sign === 1){
            return intPart
        }else{
            return -intPart
        }
    } else {
         if( sign === 1){
            return intPart
        }else{
            return -intPart-1
        }
    }
}



 function trunc(x){
    let intPrt = 0
    let sgn = 1
      if (x < 0) {
        sgn = -1;
        x = -x;
    }
    
    while (x >= 1) {
        intPrt++;
        x -= 1;
    }
 

   return intPrt*sgn
 }






