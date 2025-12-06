export function getArchitects(){
    return [document.querySelectorAll("a") , document.querySelectorAll("body > not:(<a>)") ]
}

export function getClassical(){
    return [document.getElementsByClassName("classical") ,  document.getElementsByClassName("not:(<classical>)")]
}


export function getActive(){
    return [document.getElementsByClassName("active") , document.getElementsByClassName("not:(<active>)")]
}

export function getBonannoPisano(){
    return [document.getElementById("BonannoPisano") ,document.getElementById("not:(BonannoPisano)")  ]
}