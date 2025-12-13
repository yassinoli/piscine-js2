async function queryServers(serverName , q){
    let fst = await getJSON(`/pouet?q=${q}`)
    let snd = await getJSON(`/pouet_backup?q=${q}`)
    return  Promise.race([snd , fst])
}

function gougleSearch(q){

    let allprom = Promise.all([ queryServers('web' , q), queryServers('web' , q), queryServers('web' , q) ])
    .then((value)=>{
        return { web : value[0] , image : value[1] , video : value[2]}
    })
     let timout = new Promise((res , rej)=>{
        setTimeout(() => {
            rej(Error('timeoute'))
        }, 80);
     })
    return Promise.race([allprom , timout])
     
}








