import { readFile }  from 'node:fs/promises';



const args = await readFile(process.argv[2],'utf8')

let spl = args[0]

let res = []


spl.split(' ').forEach(elm => {
    let tmp = ""
    tmp+= elm.slice(Math.ceil(elm.length/2))
    tmp+= elm.slice(0,Math.ceil(elm.length/2))
    res.push(tmp)
    

});

    console.log(res.join(' '))
