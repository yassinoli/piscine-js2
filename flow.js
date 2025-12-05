function flow(funcs) {
  return (...args) => {
    let elm = funcs[0](...args);
    for (let i = 1; i < funcs.length; i++) {
      elm = funcs[i](elm);
    }
    return elm;
  };
}
