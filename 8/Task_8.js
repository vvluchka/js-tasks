function keysAndValues(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let result = [keys.sort(), values.sort()];
  return result;
}
console.log(keysAndValues({
  b: 2,
  h: 4,
  a: 1,
  c: 3
}));