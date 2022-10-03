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


// Another solution 

// function addAndSubtract(array) {
//     let sumArr = 0;
//     let sumArrModified = 0;
//     let modifiedArr = [];

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]

//         sumArr += array[i]
//         if (current % 2 === 0) {
//             current += i;
//         } else {
//             current -= i
//         }
//         modifiedArr.push(current)
//         sumArrModified += current;

//     }
//     console.log(modifiedArr);
//     console.log(sumArr);
//     console.log(sumArrModified);
// }
// //addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);
