function tennisRanklist(input) {

    let index = 0;
    let countTournament = Number(input[index]);
    index++;
    let pointsRanklist = Number(input[index]);
    index++;
    let points = 0;
    let pW = 0;
    let pF = 0;
    let pSF = 0;
    let percent = 0;

    for (let i = 0; i < countTournament; i++) {
        let stage = input[index]
        index++;

        switch (stage) {
            case "W": pW += 2000;
                percent++; break;

            case "F": pF += 1200; break;

            case "SF": pSF += 720; break;

        }

    }
    points = pW + pF + pSF + pointsRanklist;
    let pointsMiddle = (pW + pF + pSF) / countTournament;
    let percentWin = percent / countTournament * 100;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(pointsMiddle)}`);
    console.log(`${percentWin.toFixed(2)}%`);

}
tennisRanklist(["7",

    "1200",

    "SF",

    "F",

    "W",

    "F",

    "W",

    "SF",

    "W"]);