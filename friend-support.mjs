import http from 'http'
import { readFile }  from 'fs/promises';
import { readdir } from 'node:fs/promises';
let guest = await readdir('guests')

const port = 5000

const server  = http.createServer(async (req , res)=>{
    let check = req.url.replace('/','')
    try{

        if (guest.includes(check+'.json')){
            let jsn =  await readFile('guests/'+`${check}`+'.json' , 'utf8')
            let jason = JSON.parse(jsn)
            res.writeHead(200)
            res.end(JSON.stringify(jason))
        }else{
            res.writeHead(404)
            res.end("not found")
        }
    }
    catch{
      res.writeHead(500)
      throw new Error("server failed")
    }
})

server.listen(port , ()=>{
    console.log("server start at port" , port);
}) 