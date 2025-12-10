function replica(obj, ...sources) {
  sources.forEach((source) => {
    let keysVals = Object.entries(source);
    keysVals.forEach((kv) => {
      if (
        typeof kv[1] != "object" ||
        Array.isArray(kv[1]) ||
        kv[1] instanceof RegExp ||
        Array.isArray(obj[kv[0]])
      ) {
        obj[kv[0]] = kv[1];
      } else if (typeof kv[1] == "object" && typeof obj[kv[0]] == "object") {
        obj[kv[0]] = replica(obj[kv[0]], source[kv[0]]);
      } else if (typeof kv[1] == "object" && typeof obj[kv[0]] != "object") {
        obj[kv[0]] = kv[1];
      }
    });
  });
  return obj;
}
