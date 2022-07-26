function traveling(input) {

    let index = 0;
    let destination = input[index]
    index++;
    let minBudget = Number(input[index]);
    index++;
    let save = 0;
    while (destination !== "End") {
        let saveMoney = Number(input[index]);
        save += saveMoney;
        index++

        if (save >= minBudget) {
            console.log(`Going to ${destination}!`);
            destination = input[index]
            index++;
            minBudget = Number(input[index])
            index++;
            save = 0;
        }
    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])


