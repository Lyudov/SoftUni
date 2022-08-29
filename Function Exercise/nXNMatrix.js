function nXNMatrix(num) {

    let matrix = [];
    for (let i = 0; i < num; i++) {
        let row = [];
        for (let x = 0; x < num; x++) {
            row.push(num)
        }
        matrix.push(row.join(' '));
    }
    console.log(matrix.join('\n'));
}
nXNMatrix(7);
