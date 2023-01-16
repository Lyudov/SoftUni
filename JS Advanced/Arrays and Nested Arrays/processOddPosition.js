function processOddPosition(arr) {

    let res = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            res = arr[i] * 2;
            newArr.push(res);
        }

    }
    console.log(newArr.reverse().join(' '));
}
processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);
