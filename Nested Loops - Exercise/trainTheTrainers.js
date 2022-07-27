function trainTheTrainers(input) {

    let index = 0;
    let countPeople = Number(input[index]);
    index++;
    let command = input[index];
    index++;


    let sumGrade = 0;
    let counter = 0;
    while (command !== "Finish") {

        let name = command;
        let avgGrade = 0;
        counter++;

        for (let i = 0; i < countPeople; i++) {
            let grade = Number(input[index]);
            index++;
            avgGrade += grade;
        }
        let currentAvg = avgGrade / countPeople
        sumGrade += currentAvg
        console.log(`${name} - ${currentAvg.toFixed(2)}.`);
        command = input[index];
        index++;

    }
    let avg = sumGrade / counter;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])
