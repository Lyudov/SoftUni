function sumOfNumbersNM(firstNum, secondNum) {

    let result = 0;
    let n = Number(firstNum);
    let m = Number(secondNum);
    for (let i = n; i <= m; i++) {
result += i;
    }
console.log(result);
}
sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');
