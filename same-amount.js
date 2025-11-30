const sameAmount = (str, rgx1, rgx2) => {
    str = String(str);    

    const m1 = str.match(rgx1);
    const m2 = str.match(rgx2);

    if (m1.length === m2.length)  return true;
    return false
};

