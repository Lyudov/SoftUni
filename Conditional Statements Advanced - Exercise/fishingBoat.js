function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let countFishmans = Number(input[2]);

    let rentPrice = 0;

    if (season === "Spring") {
        rentPrice = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        rentPrice = 4200;
    } else if (season === "Winter") {
        rentPrice = 2600;
    }

    if (countFishmans <= 6) {
        rentPrice -= rentPrice * 0.1;
    } else if (countFishmans >= 7 && countFishmans <= 11) {
        rentPrice -= rentPrice * 0.15;
    } else if (countFishmans >= 12) {
        rentPrice -= rentPrice * 0.25;
    }
    if (countFishmans % 2 == 0 && season !== "Autumn") {
        rentPrice -= rentPrice * 0.05;
    }
    let diff = Math.abs(budget - rentPrice);
    if (budget >= rentPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
fishingBoat(["2000", "Winter", "13"])