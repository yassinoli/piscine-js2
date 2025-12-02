function sums(num) {
    if (num<=1){
        return []
    }
    let arr = []
     for(let i=0 ; i<num ; i++){ arr.push(1) }
    let results = []

    function modify(arr) {
        results.push(arr)

        if (arr.length <= 2) return

        for (let i = 0; i < arr.length - 1; i++) {
            let next = [...arr.slice(0, i),arr[i] + arr[i + 1],...arr.slice(i + 2)]
            modify(next)
        }
    }

    modify(arr)
    results.forEach(elem => {
        elem.sort((a,b) => a-b )
    });
    results.sort((a,b) => a.length - b.length)

    let strArr = results.map(a => a.join(","));
    let uniqueStr = [...new Set(strArr)];
    let uniqueArr = uniqueStr.map(s => s.split(",").map(Number));


    return uniqueArr
}