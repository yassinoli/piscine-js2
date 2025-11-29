

function get(src,path){
    const key = path.split('.')
    let cur = src
    for (let ky of key){
        if (cur == nul || !(ky in current)){
            return undefined
        }
        cur = cur[ky]
    }
    return cur 
}