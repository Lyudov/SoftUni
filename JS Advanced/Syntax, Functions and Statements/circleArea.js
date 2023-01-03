function circleArea(input) {

    let result;
    let type = typeof(input);
if (type === 'number') {
result = Math.PI * Math.pow(input,2);
console.log(result.toFixed(2));
} else {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
}

}
circleArea(5);
circleArea('name');
