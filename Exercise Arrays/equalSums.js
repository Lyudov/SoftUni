function equalSums(arr) {

    let arrL = arr.length;
    let foundIndex = "no";
    for (let i = 0; i < arrL; i++) {

        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++) {
            sumLeft += arr[l];
        }
        for (let r = i + 1; r < arrL; r++) {
            sumRight += arr[r]
        }
        if (sumLeft === sumRight) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3, 3]);
