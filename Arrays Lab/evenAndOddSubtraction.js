function evenAndOddSubtraction(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let even = 0;
    let odd = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }
    }

    let diff = even - odd;
    console.log(diff);
}
evenAndOddSubtraction([3, 5, 7, 9]);