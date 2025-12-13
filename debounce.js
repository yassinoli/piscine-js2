function debounce(func, t) {
  let r;
  return function (...args) {
    clearTimeout(r);
    r = setTimeout(() => func.apply(this, args), t);
  };
}


function opDebounce(func, wait, { leading = false } = {}) {
  let timer = null;
  let leadingCalled = false;
  return function (...args) {
    const ctx = this
    if (leading && !timer) {
      func.apply(ctx, args);
      leadingCalled = true;
      timer = setTimeout(() => {
        timer = null;
        leadingCalled = false;
      }, wait);
      return; 
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!leading || !leadingCalled) {
        func.apply(ctx, args);
      }
      timer = null;
      leadingCalled = false;
    }, wait);
  };
}
