function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let counter = 1;

    let sumGrade = 0;
    let excluded = 0;
    let avgGrade = 0;
    let isExcluded = false;

    while (counter <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            excluded++;

            if (excluded > 1) {
                isExcluded = true;
                break;
            }
            continue;
        }

        sumGrade += grade;
        counter++;

    }
    if (!isExcluded) {

        avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${counter} grade`);
    }

}
graduation(["Gosho",

    "5",

    "5.5",

    "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);