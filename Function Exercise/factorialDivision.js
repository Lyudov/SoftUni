function factorialDivision(num1, num2) {

    let currentResNum1 = 1;
    let currentResNum2 = 1;
    for (let i = 1; i < num1; i++) {
        currentResNum1 *= (i + 1);
    }

    for (let x = 1; x < num2; x++) {
        currentResNum2 *= (x + 1);

    }
    let result = currentResNum1 / currentResNum2;
    console.log(result.toFixed(2));

}
factorialDivision(6, 2)
