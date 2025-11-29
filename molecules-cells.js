function RNA(str){
let res = ""
const sh = new Map()
sh.G = 'C'
sh.C = 'G'
sh.T = 'A'
sh.A = 'U'
for (let i=0 ; i< str.length ; i++){
    if ((sh[str[i]])){
        res += sh[str[i]]
    }
} 
return res
}


function DNA(str){
let res = ""
const sh = new Map()
sh.C = 'G'
sh.G = 'C'
sh.A = 'T'
sh.U = 'A'
for (let i=0 ; i< str.length ; i++){
    if ((sh[str[i]])){
        res += sh[str[i]]
    }
} 
return res
}

