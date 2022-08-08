function addAndSubtract(arr) {

    let originalArr = 0;
    let newArr = 0;
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {

        originalArr += arr[i]
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        newArr += arr[i];

    }
    console.log(arr.join(' '));
    console.log(originalArr);
    console.log(newArr);

}
addAndSubtract([5, 15, 23, 56, 35]);
