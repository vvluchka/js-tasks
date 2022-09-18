function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}
console.log(countTrue([true, false, false, false, true, 1, 0, "Hello", false]));
