function shopping(input) {

    let videoCard = 250;

    let budget = Number(input[0]);
    let countVideoCard = Number(input[1]);
    let countProccessors = Number(input[2]);
    let ram = Number(input[3]);

    let totalVC = countVideoCard * videoCard;
    let priceProccessors = (totalVC * 0.35);
    let priceRam = (totalVC * 0.1);

    let total = totalVC + countProccessors * priceProccessors + ram * priceRam;

    if (countVideoCard > countProccessors) {
        total -= total * 0.15;
    }
    let difference = Math.abs(total - budget);

    if (budget >= total) {
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }

}
shopping(["920.45", "3", "1", "1"]);
