function deliveryFood(input) {

    let chickenPriceMenu = 10.35;
    let fishPriceMenu = 12.40;
    let vegetarianPriceMenu = 8.15;
    let deliveryPrice = 2.5;

    let countChickenMenus = Number(input[0]);
    let countFishMenus = Number(input[1]);
    let countVegetarianMenus = Number(input[2]);

    let total = countChickenMenus * chickenPriceMenu + countFishMenus *
        fishPriceMenu + countVegetarianMenus * vegetarianPriceMenu;
    let desert = total * 0.2;
    let totalPrice = total + desert + deliveryPrice;
    console.log(totalPrice);

}
deliveryFood(["9 ", "2 ", "6 "]);