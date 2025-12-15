import { readFile }  from 'fs/promises';
import { writeFile } from 'node:fs/promises';

let arg1 = process.argv[2]
let arg2 = process.argv[3]
let file = await readFile(arg1)
if (arg2==='decode'){
    writeFile('clear.txt' , file.from() )
}
if (arg2==='encode'){
    writeFile('cypher.txt' , file.toString() )
}
