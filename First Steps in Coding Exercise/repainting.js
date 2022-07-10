function repainting(input) {

    let naylonPrice = 1.5;
    let paintPrice = 14.5;
    let thinnerPrice = 5;
    let bags = 0.4;

    let nylonCount = Number(input[0]);
    let paintCount = Number(input[1]);
    let thinnerCount = Number(input[2]);
    let workHouers = Number(input[3]);

    let priceForMaterials = (nylonCount + 2) * naylonPrice + (paintCount + (paintCount * 0.1)) *
        paintPrice + thinnerCount * thinnerPrice + bags;
    let workPrice = priceForMaterials * 0.3;
    let total = priceForMaterials + (workPrice * workHouers);
    console.log(total);
}
repainting(["5 ", "10 ", "10 ", "1 "]);