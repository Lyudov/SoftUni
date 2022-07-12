function godzillaVsKong(input) {
  
    let budget = Number(input[0]);
    let countStatyst = Number(input[1]);
    let priceForDress = Number(input[2]);

    let decorPrice = budget * 0.1;
    if (countStatyst > 150) {
        priceForDress -= priceForDress * 0.1;
    }
    let totalPrice = (priceForDress * countStatyst) + decorPrice;
    let money = Math.abs(totalPrice - budget);
    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["15437.62",
    "186",
    "57.99"]);
