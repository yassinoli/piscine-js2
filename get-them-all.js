
export function getArchitects(){
    const arch = Array.from(document.querySelectorAll("a"))
    const nonArch = Array.from(document.body.querySelectorAll("*")).filter((elm) =>  elm.tagName.toLowerCase() != "a")
    return [arch , nonArch]
}


export function getClassical(){

    const arc = Array.from(document.querySelectorAll("a"))
    const cls = arc.filter((itm) => itm.classList.contains('classical') )
    const nocls = arc.filter((itm) => !itm.classList.contains('classical') )
    return [cls , nocls]

}


export function getActive(){
    const arc = Array.from(document.querySelectorAll("a.classical"))
    const actv = arc.filter(itm => itm.classList.contains("active"))
    const noActv = arc.filter(itm =>  !itm.classList.contains("active"))
    return [actv , noActv]
}





export function getBonannoPisano(){
    const bnn = document.getElementById("BonnanoPisano")
    const nobnn = Array.from(document.querySelectorAll("a.classical.active")).filter((a) => a != bnn )
    return [bnn , nobnn]

}



