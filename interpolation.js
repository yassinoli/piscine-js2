function interpolation(option = {}){
    let dist = (option.end - option.start) / option.step
    let point = option.duration/option.step
  
 for (let i = 1 ; i<option.step ; i++) {
        setTimeout(() => {
            const x= option.start + dist*i
           const  y = option.point*i
            option.callback([x,y])
            
        }, point*i);
}
}
