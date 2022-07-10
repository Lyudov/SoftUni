function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let gradus = radians * 180 / Math.PI;

    console.log(gradus);
}
radiansToDegrees(["3.1416"]);