function letsSort(arr, str){
    if (str === 'asc') {
        return arr.sort(function(a, b){
            return a - b;
        });
    } else if (str === 'desc') {
        return arr.sort(function(a, b){
            return b - a;
        });
    } else if(str === 'none'){
        return arr;
    }
}

console.log(letsSort([3, 2, 1, 8, 5, 6, 10, 4, 9, 7], 'asc'));