function longWords(arr){
    return arr.every((item) => {
        return (typeof item === 'string') && (item.length >= 5)
    })
}

function oneLongWord(arr){
    return arr.some((item) => {
        return typeof item === 'string' && item.length >=10
    })
}

function noLongWords(arr){
    return arr.every((item) => {
        return !(typeof item === 'string' && item.length >=7)
    })
}

 