function biggestElement(matrix) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let currNum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            currNum = matrix[i][j];
            if (currNum > biggestNum) {
                biggestNum = currNum;
            }
        }
    }
   return biggestNum;
}
console.log(biggestElement([[-20, -146, -10],

[-8, -33, -145]]));
