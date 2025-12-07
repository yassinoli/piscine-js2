import {colors} from "./fifty-shades-of-cold.data.js"

export function generateClasses(){
    const stl = document.createElement("style")
    colors.forEach(elm => {
         stl.append(`.${elm} { background: ${elm}; }`);
    });
        document.head.appendChild(stl)

}

export function generateColdShades(){
    colors.forEach(elm => {
        if (elm.includes("aqua") || elm.includes("blue") || elm.includes("turquoise")|| elm.includes("green") || elm.includes("cyan") || elm.includes("navy")  || elm.includes("purple") ){
           const dv = document.createElement("div")
            dv.classList.add(elm)
            dv.textContent = elm
            document.body.appendChild(dv)
        }
    });
}

export function choseShade(target){
    const arr = Array.from(document.body.getElementsByTagName("div"))
    arr.forEach(elm => {
        elm.classList = target
    });

}

