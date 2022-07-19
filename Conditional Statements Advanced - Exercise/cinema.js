function cinema(input) {

    let typeProjection = input[0];
    let countRow = Number(input[1]);
    let countColumn = Number(input[2]);
    let income = 0;

    if (typeProjection === "Premiere") {
        income = countRow * countColumn * 12;
    } else if (typeProjection === "Normal") {
        income = countRow * countColumn * 7.50;
    } else if (typeProjection === "Discount") {
        income = countRow * countColumn * 5.0;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere", "10", "12"]);
