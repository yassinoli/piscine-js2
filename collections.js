function arrToSet(arr) {
  return new Set(arr);
}


function arrToStr(arr){
    return arr.join("")
}

function setArr(set){
     return [...set]
}

function setToStr(set){
    return [...set].join(' ')
}

function strToArr(str){
    return str.split("")
}

function strToSet(str){
    return new Set(str.split(''))
}

function mapToObj(map){
    let obj = {}
    for (let [i,j] of map) {
        obj[i]=j
    }
    return obj
}

function objToArr(obj){
    return Object.entries(obj)
}

function objToMap(obj) {
  return new Map(Object.entries(obj));
}


function arrToObj(arr) {
  let obj = {};
  arr.forEach((val, i) => { 
    obj[i] = val
  })
  return obj;
}

function strToObj(str) {
  let obj = {};
  [...str].forEach((char, i) => obj[i] = char);
  return obj;
}


function superTypeOf(val){
  if (val === null) return null
  if (typeof(val)==='object') {
    return Object.prototype.toString.call(val).slice(8,-1)
  }else{
    return typeof(val)
  }
}
