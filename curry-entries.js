function defaultCurry(obj1){

    return function(obj2){
     let res = {}
    let ky1 = Object.keys(obj1)
    let ky2 = Object.keys(obj2)
   
   
    for (let k of ky2){
            res[k] = obj2[k]
    }


    for (let k of ky1){
        if(!ky2.includes(k)){
             res[k] = obj1[k]
        }
    }
    return res
    }

}


function mapCurry(func){
    return function(obj){
      return    Object.fromEntries(
    Object.entries(obj).map(func))
    }
}

function reduceCurry(func){
    return function(obj,acc){
      return  Object.entries(obj).reduce(func , acc)
    }
}

function filterCurry(func){
    return function(obj){
      return  Object.fromEntries(Object.entries(obj).filter(func))
    }
}

function reduceScore(obj , acc){
   let obj1 = filterCurry(([k,v])=>v["isForceUser"])(obj)
   
  return acc + reduceCurry((ac , [ky , val])=>{
    return ac + val["pilotingScore"] + val["shootingScore"]
   })(obj1,0)
}

function filterForce(obj){
  let obj1 = filterCurry(([k, v]) => v.shootingScore >= 80)(obj);

  return mapCurry(([k, v]) => [k, v.isForceUser])(obj1);
}

function mapAverage(obj){
    let obj1 = mapCurry( ([k , v]) => [k, {averageScore : (v['pilotingScore'] + v['shoutingScore'])/2}])(obj)
    return obj
}
