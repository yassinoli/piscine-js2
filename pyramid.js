function pyramid(st,n){
    let s =""
    for (let i =1 ; i<=n ; i++){
        s+= " ".repeat(n-i)
        for (let j =1 ; j<2*i ; j++){
        s+=st
    }
    if (i!=n){
        s+='\n'
    }
    }
    return s
}

