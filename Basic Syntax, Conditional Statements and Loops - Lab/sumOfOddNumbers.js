function sumOfOddNumbers(num) {

    let sum = 0;
    let x = num * 2
    for (let i = 1; i <= x; i++) {
        if (i % 2 === 1) {
            sum += i;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(3);