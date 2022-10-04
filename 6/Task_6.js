function largestArrayNumbers(arr){
    let max = 1;
    let maxArr = [];
    for(let i = 0; i < arr.length; i++){
        max = arr[i][1];
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        maxArr.push(max);
    }
    return maxArr;
}
console.log(largestArrayNumbers([[1,2,3],[4,5,6],[7,8,9]]));