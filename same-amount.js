const sameAmount = (str, rgx1, rgx2) => {
    const r1 = new RegExp(rgx1, "g")
    const r2 = new RegExp(rgx2, "g")

    const m1 = str.match(r1) || []
    const m2 = str.match(r2) || []

    return  m1.length === m2.length
};
