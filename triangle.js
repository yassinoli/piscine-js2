function triangle(f,n){
    let s =""
    for (let i =1 ; i<=n ; i++){
        for (let j =1 ; j<=i ; j++){
        s+=f
    }
    if (i!=n){
        s+='\n'
    }
    }
    return s
}

