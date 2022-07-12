function toyShop(input) {

    let puzzle = 2.60;
    let talkingDoll = 3;
    let tedyBear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let tripPrice = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countTalkingDoll = Number(input[2]);
    let countTeddyBear = Number(input[3]);
    let countMinion = Number(input[4]);
    let countTruck = Number(input[5]);

    let totalPrice = countPuzzle * puzzle + countTalkingDoll * talkingDoll + countTeddyBear * tedyBear +
        countMinion * minion + countTruck * truck;
    let totalToy = countPuzzle + countTalkingDoll + countTeddyBear + countMinion + countTruck;

    if (totalToy >= 50) {
        totalPrice -= totalPrice * 0.25;
    }
    totalPrice -= totalPrice * 0.1;
    let leftMoney = Math.abs(totalPrice - tripPrice);
    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`)
    }

}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"]);

