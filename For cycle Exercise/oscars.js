function oscars(input) {

    let index = 0;
    let nameActor = input[index];
    index++;
    let pointsAcademy = Number(input[index]);
    index++;
    let count = Number(input[index]);
    index++;

    let isNominated = false;

    for (let i = 0; i < count; i++) {
        let currentName = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++;

        let totalPoints = (currentName.length * tempPoints) / 2;
        pointsAcademy += totalPoints;

        if (pointsAcademy > 1250.5) {
            isNominated = true;
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(pointsAcademy - 1250.5);
    if (!isNominated) {
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"])