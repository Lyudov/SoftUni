function suppliesForSchool(input) {

    const pricePens = 5.8;
    const priceMarkers = 7.2;
    const priceDetergent = 1.2;

    const countPens = Number(input[0]);
    const countMarkers = Number(input[1]);
    const litersDetergent = Number(input[2]);
    const percentDiscount = Number(input[3]);
    let sumForSupplies = countPens * pricePens + countMarkers * priceMarkers + litersDetergent * priceDetergent;
    let totalSum = sumForSupplies - (sumForSupplies * (percentDiscount / 100));

    console.log(totalSum);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);