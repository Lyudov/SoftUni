function accountBalance(input) {

    let index = 0
    let payment = input[index];

    let account = 0;

    while (payment !== "NoMoreMoney") {
        let tempPayment = Number(payment);
        if (tempPayment < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${tempPayment.toFixed(2)}`);

        index++;
        payment = input[index];
        account += tempPayment

    }
    console.log(`Total: ${account.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"])