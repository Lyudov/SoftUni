function celsiusToFahrenheit(input) {
    let ceslsius = Number(input[0]);
    let fahrenheit = ceslsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(["25"]);