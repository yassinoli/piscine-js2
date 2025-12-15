import { readdir } from 'node:fs/promises';

let args = process.argv[2]

let rdd = await  readdir(args)

let res = []

rdd.forEach((elm , idx) => {
    res.push((elm.split('_').join(' ').replace(".json",'')))
});

let result = []
res.forEach(element => {
    result.push(element.split(' ').reverse().join(' '))
});
result = result.sort()

result.forEach((element , idx) => {
   console.log( ((idx + '. ' + element )));
  
});


