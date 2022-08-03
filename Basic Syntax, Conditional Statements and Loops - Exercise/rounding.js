function rounding(number, percision) {

    if (percision > 15) {
        percision = 15
    }
    let roundedNumber = number.toFixed(percision);
    console.log(parseFloat(roundedNumber));
}
rounding(10.5, 3);
