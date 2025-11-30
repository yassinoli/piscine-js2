const vowelDots =(str)=>{
    let st = ''
    let vowels = /[AaEeIiOoUuYy]/
    for (let i = 0 ; i<str.length ; i++){
        if (str[i].match(vowels)){
            st+=str[i]+'.'
        }else{
            st += str[i]
        }
    }
    return st
}

console.log(vowelDots('a'));
