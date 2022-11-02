function storeProvision(currentArray, deliveryArray) {

    let infoStore = {};

    let currentArrayLength = currentArray.length;
    let deliveryArrayLength = deliveryArray.length;

    for (let i = 0; i < currentArrayLength; i += 2) {
        let currentProduct = currentArray[i];
        infoStore[currentProduct] = Number(currentArray[i + 1]);

    }

    for (let i = 0; i < deliveryArrayLength; i += 2) {
        let currentProduct = deliveryArray[i];
        if (!infoStore.hasOwnProperty(currentProduct)) {
            infoStore[currentProduct] = 0;
        }
        infoStore[currentProduct] += Number(deliveryArray[i + 1]);
    }

    for (const product in infoStore) {
        console.log(`${product} -> ${infoStore[product]}`);
    }

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
