function citiesOnly(arr) {
  let res = [];
  arr.map((elm) => {
    res.push(elm.city);
  });
  return res;
}
function capitalize(str) {
  let tmp = str.split(" ");
   return tmp.map((elm) => {
    return elm[0].toUpperCase() + elm.slice(1).toLowerCase();
   
  }).join(' ')

}
function upperCasingStates(arr) {
  let arr2 = arr.map((elm) => {
    return capitalize(elm);
  });

  return arr2;
}


function fahrenheitToCelsius(arr) {
  let res = [];
  arr.map((elm) => {
    res.push(Math.floor(((elm.split("°")[0] - 32) * 5) / 9) + "°C");
  });
  return res;
}



function trimTemp(arr) {
  let res = [];
  arr.map((elm) => {
    let x = elm.temperature.trim();
    elm.temperature = x;
    res.push(elm);
  });
  return res;
}

function fToC(F) {
  return Math.round(((F.split("°")[0] - 32) * 5) / 9) + "°Celcius";
}
function tempForecasts(arr) {
  let res = [];
  arr.map((elm) => {
    let x = elm.temperature;
    x = fToC(x);
    res.push(x + " in " + elm.city + ", " + elm.state);
  });
  return res;
}
