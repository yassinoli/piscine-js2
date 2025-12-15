import { readFile }  from 'fs/promises';
import { writeFile } from 'node:fs/promises';


let arg1 = process.argv[2]
let arg2 = process.argv[3]
let arg3 = process.argv[4]

let file = await readFile(arg1 , 'utf8')
if (arg2==='decode'){
  await  writeFile(arg3 ?? 'clear.txt' , Buffer.from(file).toString('utf8') )
}
if (arg2==='encode'){
  await  writeFile(arg3 ?? 'cypher.txt', Buffer.from(file, 'utf8' ).toString('base64'))
}

 