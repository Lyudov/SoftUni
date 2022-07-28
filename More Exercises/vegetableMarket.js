function vegetableMarket(input) {

    let priceKgVegetable = Number(input[0]);
    let priceKgFruits = Number(input[1]);
    let totalKgVegetable = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let euro = 1.94;

    let total = (priceKgVegetable * totalKgVegetable + priceKgFruits * totalKgFruits) / euro;
    console.log(total.toFixed(2));

}
vegetableMarket(["0.194", "19.4", "10", "10"]);
