function trekkingMania(input) {

    let index = 0;
    let countGroups = Number(input[index]);
    index++;

    let musalaP = 0;
    let monblanP = 0;
    let kilimandjaroP = 0;
    let k2P = 0;
    let everestP = 0;
    let totalCounP = 0;

    for (let i = 0; i < countGroups; i++) {
        let countPeople = Number(input[index]);
        index++;

        if (countPeople <= 5) {
            musalaP += countPeople;

        } else if (countPeople > 5 && countPeople <= 12) {
            monblanP += countPeople;

        } else if (countPeople > 12 && countPeople <= 25) {
            kilimandjaroP += countPeople;

        } else if (countPeople > 25 && countPeople <= 40) {
            k2P += countPeople;

        } else if (countPeople > 40) {
            everestP += countPeople;

        }
        totalCounP = musalaP + monblanP + kilimandjaroP + k2P + everestP;

    }

    let musalaPercent = (musalaP / totalCounP) * 100;
    let monblanPercent = (monblanP / totalCounP) * 100;
    let kilimandjaroPercent = (kilimandjaroP / totalCounP) * 100;
    let k2Percent = (k2P / totalCounP) * 100;
    let everestPercent = (everestP / totalCounP) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}
trekkingMania(["10",

    "10",

    "5",

    "1",

    "100",

    "12", "26", "17", "37", "40", "78"]);