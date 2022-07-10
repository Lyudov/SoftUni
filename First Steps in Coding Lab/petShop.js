function petShop(input) {
    let countPacketsDog = Number(input[0]);
    let countPacketsCat = Number(input[1]);

    let priceForDogFood = 2.5;
    let priceForCatFood = 4;
    let totalPrice = countPacketsDog * priceForDogFood + countPacketsCat * priceForCatFood;
    console.log(`${totalPrice} lv.`);
}
petShop(["5", "4"]);