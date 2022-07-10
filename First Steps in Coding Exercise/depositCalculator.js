function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearPercentInterest = Number(input[2]);

    let interestForMonth = (depositSum * (yearPercentInterest / 100)) / 12;
    let totalSum = depositSum + (depositTerm * interestForMonth);

    console.log(totalSum);
}
depositCalculator(["2350",
    "6 ",
    "7 "]
);
//вярно
