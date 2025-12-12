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

function opThrottle(f, t, { trailing = false, leading = true } = {}) {
  let r = null,
    q = null;
  return (...arg) => {
    if (!r && leading) f(...a);
    if (!r) {
      r = setTimeout(() => {
        r = null;
        if (trailing && q) f(...q);
      }, t);
    }
    q = arg;
  };
}
