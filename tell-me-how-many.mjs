import { readdir } from 'node:fs/promises';

let args  = process.argv[2]

let reading = await readdir(args)

console.log(reading.length);
