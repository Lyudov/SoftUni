function vacation(input) {

    let needMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;

    let totalDays = 0;
    let spendDays = 0;

    while (availableMoney < needMoney) {
        totalDays++;

        if (command === "spend") {
            spendDays++;

            if (spendDays === 5) {

                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                break;
            }
        }
    }
}
vacation(['2000', '1000', 'spend', '1200', 'save', '2000'])
