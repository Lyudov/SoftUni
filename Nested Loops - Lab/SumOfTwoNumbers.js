function sumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let sum = 0
    let combination = 0;
    let firstNum = 0;
    let secondNum = 0;
    let isMagic = false;
    for (let i = startNum; i <= finalNum; i++) {

        for (let y = startNum; y <= finalNum; y++) {
            sum = i + y;
            combination++;
            if (sum === magicNum) {
                firstNum = i;
                secondNum = y;
                isMagic = true;
                break;
            }
        }
        if (isMagic) {
            break;
        }
    }
    if (isMagic) {
        console.log(`Combination N:${combination} (${firstNum} + ${secondNum} = ${sum})`);
    } else {
        console.log(`${combination} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["23",
    "24",
    "20"])


