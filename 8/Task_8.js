function keysAndValues(obj) {
  var keys = [];
  var values = [];
  for (var key in obj) {
      keys.push(key);
      values.push(obj[key]);
  }
  return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));