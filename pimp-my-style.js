
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
    const elm = this
    if (!turn){
        elm.classList.remove("unpimp")
        elm.classList.add(styles[idx])
        idx++
        
        if (idx === styles.length){
             elm.classList.add("unpimp")
            turn = true
        }
    }else{
        idx--
        
        if (idx === 0){
            turn = false
            elm.classList.remove(styles[idx],"unpimp")
        }
        elm.classList.remove(styles[idx])
         

    }

}
