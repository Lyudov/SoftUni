function basketballEquipment(input) {

    let yearTax = Number(input[0]);

    let snickers = yearTax * 0.6;
    let sportWear = snickers * 0.8;
    let ball = sportWear / 4;
    let basketballAccessories = ball / 5;

    let total = yearTax + snickers + sportWear + ball + basketballAccessories;

    console.log(total);

}
basketballEquipment(["365"]);