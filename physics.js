function getAcceleration(obj){
    let a1 = obj.f/obj.m
    let a2 = obj.Δv/obj.Δt
    let a3 = (2*obj.d)/(obj.t*obj.t)
    if (a1) return a1 ;
    else if (a2) return a2 ;
    else if (a3) return a3 ;
    return 'impossible'
}

console.log(getAcceleration({}));
