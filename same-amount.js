const sameAmount =(str , rgx1 , rgx2)=>{
    if (str.match(rgx1)&& str.match(rgx2)){
        return true
    }
    return false
}
