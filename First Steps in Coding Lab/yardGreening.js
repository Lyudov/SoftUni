function yardGreening(input) {
    let quadratMeters = Number(input[0]);
    let priceForQudratM = 7.61;
    let priceForAllQMeters = quadratMeters * priceForQudratM;
    let discount = priceForAllQMeters * 0.18;
    let totalPrice = priceForAllQMeters - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"]);
