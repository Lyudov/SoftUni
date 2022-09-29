function reverseAnArrayOfNumbers(num, array) {

    let newArray = '';
    for (let i = 0; i < num; i++) {
        newArray += array[num - 1 - i] + ' ';
    }

    console.log(newArray);

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);


// function reverseAnArrayOfNumbers(n, numbers) {

//     let result = [];
//     for (let i = n - 1; i >= 0; i--) {
//         result.push(numbers[i]);
//     }
//     console.log(result.join(' '));
// }
// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
