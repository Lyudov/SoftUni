function mathPower(number, raised) {

    //console.log(Math.pow(number, raised));
    let result = 1;
    for (let i = 0; i < raised; i++) {
        result = result * number;

    }
    console.log(result);
}
mathPower(2, 8);
