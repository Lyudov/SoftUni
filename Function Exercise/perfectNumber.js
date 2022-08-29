function perfectNumber(number) {

    let sumOfDivisiors = 1;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisiors += i;
        }
    }
    if (sumOfDivisiors === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);
