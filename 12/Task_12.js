function matrixTrace(matrix) {
    let trace = 0;
    for (let i = 0; i < matrix.length; i++) {
        trace += matrix[i][i];
    }
    return trace;
}
console.log(matrixTrace([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));