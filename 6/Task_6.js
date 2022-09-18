function largestArrayNumbers(arr){
    var max = 0;
    var maxarr = [];
    for(var i = 0; i < arr.length; i++){
        max = arr[i][0];
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        maxarr.push(max);
    }
    return maxarr;
}
console.log(largestArrayNumbers([[1,2,3],[4,5,6],[7,8,9]]));