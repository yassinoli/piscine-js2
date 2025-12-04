function filterShortStateName(arr){
    return arr.filter((item) => 
        item.length < 7
    )
}
console.log(filterShortStateName([
    'Alaska',
    'Hawaii',
    'Idaho',
    'Iowa',
    'Kansas',
    'Maine',
    'Nevada',
    'Ohio',
    'Oregon',
    'Texas',
    'Utah',
  ]));

function filterStartVowel(ar){
    return ar.filter((elm) => elm[0].match(/[eaiouEOUIA]/))
}


function filter5Vowels(arr){
    return arr.filter((elm) => elm.match(/[aeiouAEIOU]/g).length >= 5)
}



function filter1DistinctVowel(arr) {
  return arr.filter((elm) => {
    const vwel = elm.toLowerCase().match(/[aeiou]/g);
    return vwel && new Set(vwel).size === 1;
  });
}

function multiFilter(arr){
    return arr.filter((elm) => (elm.capital.length >=8)
    && (((elm.name)[0].match(/[eaiouEOUIA]/g) || []).length === 0) 
    && (((elm.tag).match(/[eaiouEOUIA]/g)|| []).length >= 1) 
    && (elm.region !== 'South'))
}
