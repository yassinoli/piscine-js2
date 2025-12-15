import { writeFile } from 'node:fs/promises';
import { readdir } from 'fs/promises';
import { readFile }  from 'fs/promises';

let dir = await readdir(process.argv[2])

let yessed = []
 for(let elm of dir){
   let tmp = await readFile(`${process.argv[2]}/${elm}`, 'utf8')
   
  let an =  JSON.parse(tmp)
  if(an.answer === 'yes'){
    yessed.push(elm + ' ')
  }
}

 let res = []
yessed.forEach((elm) => {
    res.push((elm.split('_').join(' ').replace(".json",'')))
});

let result = []
res.forEach(element => {
    result.push(element.split(' ').reverse().join(' '))
});
result = result.sort()



writeFile('vip.txt' ,result.map((item,idx) => {
    return idx+1 + '.' + item + idx !== result.length-1 ? '\n' : 's'
}))