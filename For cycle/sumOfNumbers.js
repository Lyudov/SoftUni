function sumOfNumbers(input) {
    let n = input[0];
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        let numText = Number(n[i]);
        sum += numText

    }
    console.log(sum);

}
sumOfNumbers(["1234"]);