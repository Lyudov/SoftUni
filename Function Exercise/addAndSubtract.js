function addAndSubtract(first, second, third) {

    let sumFirstAndSecond = sum(first, second);
    console.log(subtract(sumFirstAndSecond, third));

    function sum(first, second) {
        return first + second;
    }
    function subtract(sumFirstAndSecond, thirdNumber) {
        return sumFirstAndSecond - thirdNumber;
    }

}
addAndSubtract(23, 6, 10);

// function  addAndSubtract(first, second, third) {

//     let sum = (first, second) => {
//         return first + second;
//     };
//     let subtract = (sumFirstAndSecond, thirdNumber) => {
//         return sumFirstAndSecond - thirdNumber;
//     };

//     let sumFirstAndSecond = sum(first, second);
//     let finalResult = subtract(sumFirstAndSecond, third);
//     console.log(finalResult); 
// }
//  addAndSubtract(23, 6, 10);


// function addAndSubtract(firstNum, secondNum, thirdNum) {

//     function add(numOne, numTwo) {

//         return numOne + numTwo
//     }
//     let sum = add(firstNum, secondNum);

//     function subtract(sumTwoNums, numThree) {
//         return sumTwoNums - numThree;
//     }
//     console.log(subtract(sum, thirdNum));
// }
// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);
// addAndSubtract(42, 58, 100);
