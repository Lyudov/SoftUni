function orders(product, quantity) {
    let price = 0;
    switch (product) {
        case "coffee": price = 1.50 * quantity; break;
        case "water": price = 1.00 * quantity; break;
        case "coke": price = 1.40 * quantity; break;
        case "snack": price = 2.00 * quantity; break;

    }

    return price.toFixed(2)


}
console.log(orders("coffee", 2));
