function fishland(input) {

    let priceMackerel = Number(input[0]);
    let priceCaca = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgHorseMackerel = Number(input[3]);
    let kgShell = Number(input[4]);
    let priceShell = 7.5;

    let priceBonito = priceMackerel * 1.6;
    let priceHorseMackerel = priceCaca * 1.8;

    let total = kgBonito * priceBonito + kgHorseMackerel * priceHorseMackerel + kgShell * priceShell;

    console.log(total.toFixed(2));

}
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);
