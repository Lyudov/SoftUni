function newHouse(input) {

    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    let diff = 0;
    if (typeFlowers === "Roses") {
        price = countFlowers * 5;
        if (countFlowers > 80) {
            price -= price * 0.1;
        }
    } else if (typeFlowers === "Dahlias") {
        price = countFlowers * 3.80;
        if (countFlowers > 90) {
            price -= price * 0.15;
        }
    } else if (typeFlowers === "Tulips") {
        price = countFlowers * 2.80;
        if (countFlowers > 80) {
            price -= price * 0.15;
        }
    } else if (typeFlowers === "Narcissus") {
        price = countFlowers * 3;
        if (countFlowers < 120) {
            price += price * 0.15;
        }
    } else if (typeFlowers === "Gladiolus") {
        price = countFlowers * 2.50;
        if (countFlowers < 80) {
            price += price * 0.2;
        }

    }
    diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"]);