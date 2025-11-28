function intPrt(x) {
    if (x < 1) return 0;

    let n = 0;
    let y = x;

    for (let i = 52; i >= 0; i--) {
        let p = 2 ** i;
        if (y >= p) {
            y -= p;
            n += p;
        }
    }
    return n;
}

function trunc(x) {
    if (x >= 0) return intPrt(x);
    return -intPrt(-x);
}


function floor(x) {
    if (x >= 0) {
        return intPrt(x);
    } else {
        let ip = intPrt(-x);     
        if (x === -ip) return -ip;      
        return -(ip + 1);               
    }
}
function ceil(x) {
    if (x >= 0) {
        let ip = intPrt(x);
        if (x === ip) return ip;        
        return ip + 1;                   
    } else {
        return -intPrt(-x);     
    }
}
function round(x) {
    if (x >= 0) {
        let ip = intPrt(x);
        if (x - ip >= 0.5) return ip + 1;
        return ip;
    } else {
        let ip = intPrt(-x);
        if ((-x) - ip > -0.5) return -ip;
        return -(ip + 1);
    }
}
