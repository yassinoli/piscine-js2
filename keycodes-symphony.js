export const leter = "azertyuiopmlkjhgfdsqwxcvbn"
export let  obj = { 
  a :'indianred',
  b : 'lightcoral',
  c : 'salmon',
  d :'darksalmon',
  e : 'lightsalmon',
  f : 'crimson',
  g : 'red',
  h : 'firebrick',
  j :'darkred',
  h :'pink',
  i :'lightpink',
  k : 'deeppink',
  l : 'mediumvioletred',
  m : 'palevioletred',
  n : 'orange',
  o : 'coral',
  p : 'tomato',
  q : 'orangered',
  r : 'darkorange',
  s : 'yellow',
  t : 'gold',
  u : 'lightyellow',
  v : 'lemonchiffon',
  w : 'lightgoldenrodyellow',
  x : 'papayawhip',
  y : 'moccasin',
  z : 'peachpuff',
}
export function compose(){
    addEventListener("keydown" , (event) => {
       if (event.key === 'Backspace'){
        console.log(event.key);
        
            const all = document.body.querySelectorAll("*")
              all[all.length - 1].remove()
        }
        if (event.key === 'Escape'){
            const all = document.body.querySelectorAll("*")
             all.forEach(element => element.remove());

        }
         if (leter.includes(event.key) ){
            const  dv = document.createElement("div")
            dv.style.backgroundColor = obj[event.key]
            dv.innerText = `${event.key}`
            document.body.appendChild(dv)
        }
    })
}

