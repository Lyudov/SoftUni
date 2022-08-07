function sumEvenNumbers(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        let sum = arr[i];

        if (sum % 2 === 0) {
            total += sum
        }
    }
    console.log(total);
}
sumEvenNumbers(['1', '3', '5']);