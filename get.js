function get(src , path){
    let r = path.split('.')
    return src[r[0]][r[1]]
}


