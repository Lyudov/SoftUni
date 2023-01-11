function validityChecker(x1, y1, x2, y2) {

    function calculate(x1, y1, x2, y2) {

        let calcX1X2 = x2 - x1;
        let calcY1Y2 = y2 - y1;
        let sum = calcX1X2 * calcX1X2 + calcY1Y2 * calcY1Y2;
        return Math.sqrt(sum)

    }
    if (Number.isInteger(calculate(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(calculate(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(calculate(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
