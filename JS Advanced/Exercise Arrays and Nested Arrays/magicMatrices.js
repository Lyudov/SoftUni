function magicMatrices(arr) {

    let row = 0;
    let colum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currLine = arr[i].join('');
        for (let j = 0; j < currLine.length; j++) {
            row += Number(currLine[j]);
            colum += Number(currLine[0])
        }
    }
    if (row === colum) {
        console.log('true');
    } else {
        console.log('false');
    }

}
magicMatrices([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);
