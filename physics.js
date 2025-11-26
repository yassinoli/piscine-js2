function getAcceleration(obj){
    a1 = obj.f/obj.m
    a2 = obj.Δv/obj.Δt
    a3 = 2*obj.d/obj.t**2
    if (!Number.isNaN(a1)) return a1 ;
    else if (!Number.isNaN(a2)) return a2 ;
    else if (!Number.isNaN(a3)) return a3 ;
    return 'impossible'
}