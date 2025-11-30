function letterSpaceNumber(str){
    
const src = /[a-zA-z]\s\d(?!\d)(?!\w)/g
return str.match(src) 
}
