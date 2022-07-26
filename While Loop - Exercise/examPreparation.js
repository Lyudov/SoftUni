function examPreparation(input) {

    let unEvaluation = input[0];
    let index = 1;
    let task = input[index];
    index++;
    let evaluation = Number(input[index]);
    let isEnough = false;
    let badEvaluation = 0;
    let avgEvaluation = 0;
    let countEvaluation = 0;
    let lastTask = '';

    while (badEvaluation < unEvaluation) {
        // let countEvaluation = Number(evaluation);
        isEnough = false;
        countEvaluation++;
        lastTask
        avgEvaluation += evaluation;
        if (task === "Enough") {
            isEnough = true;
            break;
        }

        if (evaluation <= 4) {
            badEvaluation++;
            if (badEvaluation > unEvaluation) {

                isEnough = true;
            }

        }
        index++;
        task = input[index];
        index++;
        evaluation = Number(input[index])

    }
    if (isEnough === true) {
        console.log(`"You need a break, ${badEvaluation} poor grades.`);
    } else {
        console.log(`Average score: ${avgEvaluation}`);
        console.log(`Number of problems: ${countEvaluation}`);
        console.log(`"Last problem: ${task}`);

    }
}
examPreparation(["2",

    "Income",

    "3",

    "Game Info",

    "6",

    "Best Player",

    "4"])
    // не е решена