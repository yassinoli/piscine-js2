function nasa(n){
 let res = ""
    for(let i=1 ; i<=n ; i++){
       if (i!=1){
        res+=" "
       }
        if (i%3===0 && i%5===0){
            res+='NASA'
            continue
        }
        if (i%3===0){
            res+='NA'
            continue
        }
     if (i%5===0){
            res+='SA'
            continue
        }
        res += String(i)
}
return res
}

