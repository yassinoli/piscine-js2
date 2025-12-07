
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
        if (idx === styles.length-1){
            turn = true
        }
    }else{
        if (idx === styles.length-1){
            elm[0].classList.add("unpimp")
        }
        elm[0].classList.remove(styles[idx])
        idx--
        if (idx === 0){
            turn = false
        }
    }
}

