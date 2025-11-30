const sameAmount =(str , rgx1 , rgx2)=>{
    str = String(str)
const rg1 = str.match(rgx1)
const rg2 = str.match(rgx2)
    if (rg1 & rg2){
        if(str.match(rgx1).length === str.match(rgx2)){
            return true
        }
    }
    return false
}
