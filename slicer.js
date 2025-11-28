function slice(str , start , idx = str.length-1){
    let res = []
    for (let i=start ; i<idx ;i++){
      res.push(str[i])
    }
    return res
}
