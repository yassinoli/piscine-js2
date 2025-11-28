
function multiply(a, b) {
  let c = 0;
    let x = Math.abs(b)
  for (let i = 0; i < x; i++) {
    c += Math.abs(a);
  }
  if ((b < 0 && a>0) || (b > 0 && a<0)) {
    c = -c;
  }
  return c;
}


function devide(b,a){
    let c = 1
    if ((b < 0 && a>0) || (b > 0 && a<0)) c = -1 ;
    let count = 0
    let x = Math.abs(b)
    let y = Math.abs(a)
    while (x > 0){
        count++
       x = x-y
    }
    return multiply(count,c)
}

function modulo(a, b) {
    let c = 1
     if ( a<0) c = -1 ;
    let x = Math.abs(b)
    let y = Math.abs(a)
    while(y>=x){
        y -= x
    }
    return multiply(y,c)
}








