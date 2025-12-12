function throttle(func, t) {
  let tim;
  return (...arg) => {
    if (!tim) {
      func(...arg);
      tim = setTimeout(() => {
        tim = null;
      }, t);
    }
  };
}

function opThrottle(f, t, option = {}) {
  let r = null
  return (...arg) => {
    if (!r && option.leading) f(...arg);
    if (!r) {
      r = setTimeout(() => {
        if( !option.leading){
            f(...arg)
        }
        r = null;
      }, t);
    }
  };
}
