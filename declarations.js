const escapeStr = '\'`\\/\"'
const arr = [4,'2']
Object.freeze(arr)
const obj = {
    str : 'hey' ,
    num : 1 ,
    bool : true ,
    undef : undefined 
}
Object.freeze(obj)
const nested = {
    arr : [4 , undefined , '2'] ,
    obj : {
        str : "hey" ,
        num : "54" ,
        bool : true
    }
}
Object.freeze(nested)