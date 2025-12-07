
export const styles = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
]

let idx = 0
let turn = false



export function pimp(){
    const elm = document.getElementsByClassName("button")

    if (!turn){
        elm[0].classList.remove("unpimp")
        elm[0].classList.add(styles[idx])
        idx++
        console.log(elm);
        
        if (idx === styles.length){
            turn = true
        }
    }else{
        if (idx === styles.length){
            elm[0].classList.add("unpimp")
        }
        idx--
        if (idx === 0){
            turn = false
        }
                elm[0].classList.remove(styles[idx])

    }

}