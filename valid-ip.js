const findIP=(str)=>{
    const reg =  /(?<=\b)([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})(\:[0-9]{1,5})?/g
    return str.match(reg) || []
}

