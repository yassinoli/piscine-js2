function debounce(func, t) {
  let r;
  return function (...args) {
    clearTimeout(r);
    r = setTimeout(() => func.apply(this, args), t);
  };
}

function opDebounce(func , wait , {leading = false} = {}){
  let tim
  let clead = false

    return function(...args){ 
      const ctx = this
      if (leading && !tim){
        function aply(ctx , ...args){
          clead = true
          tim = setTimeout(() => {
            tim = null
            clead = false
          }, wait);
        }
      }
    clearTimeout (tim)
    tim =  setTimeout(() => {
      if (!leading || !clead){
        func.aply(ctx,args)
      }
      tim = null
      clead = false
    }, t);}
}

