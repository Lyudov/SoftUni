function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let cost = 0;
    let vacation = 0;

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            cost = budget * 0.7;
            vacation = "Camp"
        } else if (season === "winter") {
            cost = budget * 0.3;
            vacation = "Hotel"
        }

    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            cost = budget * 0.6;
            vacation = "Camp"
        } else if (season === "winter") {
            cost = budget * 0.2;
            vacation = "Hotel"
        }
    } else if (budget > 1000) {
        destination = "Europe"
        vacation = "Hotel"
        cost = budget * 0.1;
    }
    let diff = Math.abs(budget - cost);
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacation} - ${diff.toFixed(2)}`);

}
journey(["1500", "summer"]);