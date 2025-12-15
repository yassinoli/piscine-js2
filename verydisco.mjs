const args = process.argv.slice(2)

let spl = args

let res = []


spl.forEach(element => {
    element.split(' ').forEach(elm => {
    let tmp = ""
    tmp+= elm.slice(Math.ceil(elm.length/2))
    tmp+= elm.slice(0,Math.ceil(elm.length/2))
    res.push(tmp)
});
});

    console.log(res.join(' '))
