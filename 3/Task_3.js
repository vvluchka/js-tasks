function Descending(n){
  var digits = (""+n).split("").sort(function(a, b){return b-a});
  digits = digits.join("");
  return Number(digits);
}

console.log(Descending(1233456444789));