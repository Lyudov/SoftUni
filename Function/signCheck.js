function signCheck(numOne, numTwo, numThree) {

    let sum1 = numOne * numTwo;
    let sum2 = numTwo * numThree;
    let sum3 = numOne * numThree;
    let totalSum = '';
    if (sum1 >= 0 && numThree >= 0 || sum2 >= 0 && numOne >= 0 || sum3 >= 0 && numTwo >= 0) {
        totalSum = "Positive";
    } else {
        totalSum = "Negative"
    }
    return totalSum
}
console.log(signCheck(-6, -12, 14));
console.log(signCheck(5, 12, -15));
console.log(signCheck(-5, 1, 1)); 


// function signCheck(num1, num2, num3) {

//     let res;
//     if (num1 < 0) {
//         if (num2 >= 0 && num3 >= 0) {
//             res = "Negative";
//         } else if (num2 < 0 && num3 < 0) {
//             res = "Negative";
//         } else if (num2 >= 0 && num3 < 0) {
//             res = "Positive";
//         } else if (num2 < 0 && num3 >= 0) {
//             res = "Positive";
//         }

//     } else if (num1 >= 0) {
//         if (num2 >= 0 && num3 >= 0) {
//             res = "Positive";
//         } else if (num2 < 0 && num3 < 0) {
//             res = "Positive";
//         } else if (num2 >= 0 && num3 < 0) {
//             res = "Negative";
//         } else if (num2 < 0 && num3 >= 0) {
//             res = "Negative";
//         }

//     }
//     console.log(res);
// }
// signCheck(-5,1,1);
// signCheck(5,14,-2);
// signCheck(19,-1,-5);
