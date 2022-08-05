function sumDigits(input) {
    let sum = 0;
    let numAsString = input.toString();
    for (let char of numAsString) {
        sum += Number(char);
    }

    console.log(sum);
}
sumDigits(245678);
