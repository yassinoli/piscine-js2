function adder(arr,num=0) {
  return arr.reduce((sum, n) => sum + n, num);
}


function sumOrMul(arr,num=0){
    return arr.reduce((prev , cur) => {
        if (cur%2==0){
            return prev*cur
        }else{
            return prev+cur
        }
    }, num || 0)
}


function funcExec(arr,num=0){
    return arr.reduce((prev, cur) => {
        return cur(prev)
    }, num)
}



