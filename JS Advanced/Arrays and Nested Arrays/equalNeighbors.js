function equalNeighbors(arr) {

        let equalCount = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i > 0 && arr[i][j] === arr[i - 1][j]) {
                    equalCount++;
                }
                if (j > 0 && arr[i][j] === arr[i][j - 1]) {
                    equalCount++;
                }
            }
        }
        return equalCount;
    
}
console.log(equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]));
