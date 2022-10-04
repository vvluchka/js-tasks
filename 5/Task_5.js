function minMax(arr) {
    let min = arr[1];
    let max = arr[1];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(minMax([12, 212, 33, 4, 51]));