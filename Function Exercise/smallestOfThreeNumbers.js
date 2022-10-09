function smallestOfThreeNumbers(first, second, last) {

    let smallestNumber = Math.min(first, second, last)
    console.log(smallestNumber);

}
smallestOfThreeNumbers(2,5,3);


// function smallestOfThreeNumbers(numOne, numTwo, numThree) {

//     let smallest = 0;
//     if (numOne <= numTwo && numOne <= numThree) {
//         smallest = numOne;
//     } else if (numTwo <= numOne && numTwo <= numThree) {
//         smallest = numTwo;
//     } else if (numThree <= numOne && numThree <= numTwo) {
//         smallest = numThree;
//     }
//     return smallest;
// }
// console.log(smallestOfThreeNumbers(2, 5, 3)); 
