function distanceBetweenPoints(x1, y1, x2, y2) {

    let sumX1AndY1 = (x2 - x1);
    let sumX2andY2 = (y2 - y1);
    let sum1 = sumX1AndY1 * sumX1AndY1;
    let sum2 = sumX2andY2 * sumX2andY2;
    let totalSum = sum1 + sum2

    console.log(Math.sqrt(totalSum));
}
//distanceBetween(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
