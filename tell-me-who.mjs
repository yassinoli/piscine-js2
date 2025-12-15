import { readdir } from 'node:fs/promises';

let args = process.argv[2]

let rdd = await  readdir(args)

let res = []

rdd.forEach((elm , idx) => {
    res.push(idx+1 + '. ' + (elm.split('_').join(' ').split('.')).slice(0, -1).split(' ').reverse().join(' '))
});

console.log(res.join('\n'));
