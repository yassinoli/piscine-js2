function split(str, elem) {

    let res = [];
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        if (elem===""){
             res.push(str[i]);
             continue
        }
        if (str.slice(i, i + elem.length) === elem || i === str.length) {
            res.push(tmp);
            tmp = "";
            if (i < str.length) i += elem.length - 1;
            continue;
        }
        tmp += str[i];
    }

    if (elem !== "") {
        res.push(tmp)
    }

    return res;
}


function join(arr,elem){
    let res = ""
    for (let i=0 ; i<arr.length ; i++){
        if (i<arr.length-1){
             res += arr[i]+elem
        }else{
            res += arr[i]
        }
    }
    return res
}

console.log(split('riad',""));



