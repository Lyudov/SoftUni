function fruit(typeFruit,weight,price) {

    let weightInKg = weight / 1000;
    let total = price * weightInKg;
    console.log(`I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruit}.`);
}
fruit('orange', 2500, 1.80);
