function sortByLength (array) {
  return array.sort((x,y) => x.length - y.length);
}
console.log(sortByLength(["ABC", "AB", "A", "ABCD"]));