// function sumFirstAndLast(arr) {

//     let firstElement = arr.shift()
//     let lastElement = arr.pop()
//     console.log(Number(firstElement) + Number(lastElement));

// }
// sumFirstAndLast(['20', '30', '40']);
// sumFirstAndLast(['5', '15']);


function sumFirstAndLast(arr) {

    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    console.log(Number(firstElement) + Number(lastElement));

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '15']);
