import { write } from "bun";

const args = process.argv.slice(2)

let spl = args[0]

let res = []


spl.split(' ').forEach(elm => {
    let tmp = ""
    tmp+= elm.slice(Math.ceil(elm.length/2))
    tmp+= elm.slice(0,Math.ceil(elm.length/2))
    res.push(tmp)
    

});

    let result = res.join(' ')

    write('verydisco-forever.txt',result)
