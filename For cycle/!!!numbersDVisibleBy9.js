function numbersDVisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let printNum = "";

    for (let i = num1; i < num2; i++) {
        if (i % 9 === 0) {
            sum += i;
            printNum += `${i} `; // \n - на нов ред
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(printNum);
}
numbersDVisibleBy9(["100", "200"])