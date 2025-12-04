function adder(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}


function sumOrMul(arr,num){
    return arr.reduce((prev , cur) => {
        if (cur%2==0){
            return prev*cur
        }else{
            return prev+cur
        }
    }, num || 0)
}


function funcExec(arr){
    return arr
}



