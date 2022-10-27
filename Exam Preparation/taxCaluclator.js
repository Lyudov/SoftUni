function taxCalculator(input) {

    let array = input.shift().split('>>');
    console.log(array);

    let newArray = array.slice(0);
    // console.log(currentArray);

    let totalTax = 0;
    let familyTax = 0;
    let heavyDutyTax = 0;
    let sportsTax = 0;

    for (let i = 1; i <= array.length; i++) {
        let currentArray = newArray.shift().split(' ');
        let carType = currentArray[0];
        let years = Number(currentArray[1]);
        let kilometers = Number(currentArray[2]);

        //Family type
        if (carType === 'family') {

            familyTax = 50;
            let sum = Math.floor(kilometers / 3000) * 12;
            for (let i = 1; i <= years; i++) {
                familyTax -= 5;
            }
            familyTax = familyTax + sum;
            console.log(`A ${carType} car will pay ${familyTax} euros in taxes.`);

        }
        //Heavy Duty type
        if (carType === 'heavyDuty') {

            heavyDutyTax = 80;
            let sum = Math.floor(kilometers / 9000) * 14;

            for (let i = 1; i <= years; i++) {
                heavyDutyTax -= 8;
            }

            heavyDutyTax = heavyDutyTax + sum;
            console.log(`A ${carType} car will pay ${heavyDutyTax} euros in taxes.`);

        }
        // Sports type
        if (carType === 'sports') {

            sportsTax = 100;
            let sum = Math.floor(kilometers / 2000) * 18;

            for (let i = 1; i <= years; i++) {
                sportsTax -= 9;
            }

            sportsTax = sportsTax + sum;
            console.log(`A ${carType} car will pay ${sportsTax} euros in taxes.`);

        }
        if (carType != 'family' && carType != 'heavyDuty' && carType != 'sports') {
            console.log("Invalid car type.");
        }

    }

    totalTax = familyTax + heavyDutyTax + sportsTax;
    console.log(`The National Tevenue Agency will collect ${totalTax} euros in taxes.`);

}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);
