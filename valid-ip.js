const findIP=(str)=>{
const regx = /\b((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)(\:[0-9]{1,5})?/g;

    return str.match(regx) || []
}

