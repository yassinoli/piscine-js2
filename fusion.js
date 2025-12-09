function fusion(obj1, obj2){
    let obj3 = {}

    Object.keys(obj1).forEach((elm) =>{
        Object.keys(obj2).forEach((ky)=>{
            if(elm === ky){
                    if (Array.isArray(obj1[elm]) && Array.isArray(obj2[ky])){
                    obj3[elm]= obj1[elm].concat(obj2[elm])
                }else if (typeof obj1[elm] === 'string' && typeof obj2[ky]==='string'){
                    obj3[elm] = obj1[elm] + " " + obj2[ky]
                }else if (typeof obj1[elm] === 'number' && typeof obj2[ky]==='number'){
                    obj3[elm] = obj1[elm] + obj2[ky]
                }else if (typeof obj1[elm] === 'object' && typeof obj2[ky]==='object'){
                    obj3[elm] = fusion(obj1[elm],obj2[ky])
                }else{
                    obj3[elm]=obj2[ky]
                }
            }
        })
    })

    Object.keys(obj1).forEach((elem)=>{
        if ( !obj3[elem] ){
            obj3[elem]=obj1[elem]
        }
    })

    Object.keys(obj2).forEach((elem)=>{
        if ( !obj3[elem] ){
            obj3[elem]=obj2[elem]
        }
    })



}

console.log(Object.keys({hey:"21" , het:"14"}).length);
