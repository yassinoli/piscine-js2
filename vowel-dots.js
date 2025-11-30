let vowels = /[AaEeIiOoUu]/
const vowelDots =(str)=>{
    let st = ''
    for (let i = 0 ; i<str.length ; i++){
        if (str[i].match(vowels)){
            st+=str[i]+'.'
        }else{
            st += str[i]
        }
    }
    return st
}

console.log(vowelDots('rhytm'));
