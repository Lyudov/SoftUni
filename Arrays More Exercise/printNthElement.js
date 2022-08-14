// function printNthElement(array) {

//     let newArray = []
//     let arrL = array.length;
//     let step = Number(array[arrL - 1])
//     for (let i = 0; i < arrL - 1; i++) {

//         if (i % step === 0) {
//             newArray[i] = array[i]
//         }
//     }
//     console.log(newArray.join(' '));

// }
// printNthElement(['5', '20', '31', '4', '20', '2']);
// printNthElement(['dsa', 'asd', 'test', 'test', '2']);
// printNthElement(['1', '2', '3', '4', '5', '6']);


function printNthElement(arr) {

    let step = Number(arr.pop())
    let move = '';
    for (let i = 0; i < arr.length; i += step) {
        move += arr[i] + ' '

    }
    if (!step) {
        console.log("Empty");
    } else {
        console.log(move)
    }
}
printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
//printNthElement(['remove', 'remove', 'remove']);
