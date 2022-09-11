function computerStore(arr) {

    let priceWithoutTaxes = 0;
    let taxes = 0;
    let totalPrice = 0;
    let type = arr.pop();

    for (let price of arr) {
        let currentPrice = Number(price)
        if (price > 0) {
            priceWithoutTaxes += currentPrice;
        } else {
            console.log("Invalid price!")
            continue;
        }
    }
    if (priceWithoutTaxes === 0) {
        return console.log("Invalid order!");
    }
    taxes = priceWithoutTaxes * 0.2;
    totalPrice = taxes + priceWithoutTaxes;

    if (type === "special") {
        totalPrice -= totalPrice * 0.1;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
