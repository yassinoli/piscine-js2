function findExpression(num) {
    if (num === 1) {
        return "1";
    }

    if (num <= 0) {
        return undefined;
    }

    if (findExpression(num/2)) {
        return findExpression(num / 2) + " " + mul2;
    } else if( findExpression(num -4)) {
        return findExpression(num - 4) + " " + add4;
    }
}

