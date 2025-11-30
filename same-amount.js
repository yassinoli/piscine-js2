const sameAmount = (str, rgx1, rgx2) => {
    const count1 = (str.match(rgx1) || []).length;
    const count2 = (str.match(rgx2) || []).length;

    return count1 === count2;
};


