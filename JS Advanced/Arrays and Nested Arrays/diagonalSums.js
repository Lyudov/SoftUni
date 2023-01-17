function diagonalSums(matrix) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                firstDiagonal += matrix[i][j];
            }
            if (i + j === matrix.length - 1) {
                secondDiagonal += matrix[i][j];
            }
        }
    }
    console.log(firstDiagonal + ' ' + secondDiagonal);

}
diagonalSums([[20, 40],
[10, 60]]);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);
