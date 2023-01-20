function extractFromArr(arr) {

    let newArr = [];
    let biggestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if (currNum >= biggestNum) {
            biggestNum = currNum
            newArr.push(biggestNum);
        }
    }
   return newArr
}
console.log(extractFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
extractFromArr([1, 2, 3, 4]);
extractFromArr([20, 3, 2, 15, 6, 1,20]);
