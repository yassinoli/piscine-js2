import { readFile }  from 'fs/promises';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';


let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]

let file = await readFile(arg1)
if (arg2==='decode'){
    writeFile(arg3 ?? 'clear.txt' , Buffer.from(file).toString('base64') )
}
if (arg2==='encode'){
    writeFile(arg3 ?? 'cypher.txt', Buffer.from(file.toString(), 'base64' ))
}

 