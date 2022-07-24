function cleverLily(input) {

    let age = Number(input[0]);
    let priceWashingmachine = Number(input[1]);
    let priceCountToy = Number(input[2]);

    let moneyForBday = 0;
    let toy = 0;
    let currentMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toy++;
        } else {
            moneyForBday += currentMoney - 1;
            currentMoney += 10;
            // moneyForBday--;
        }
    }
    let price = moneyForBday + (toy * priceCountToy);
    let diff = Math.abs(priceWashingmachine - price);

    if (price >= priceWashingmachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["10", "170.00", "6"]);
