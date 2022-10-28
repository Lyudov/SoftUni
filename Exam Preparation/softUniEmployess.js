function softUni(input) {

    let students = Number(input.pop());
    let firstEmployess = Number(input.shift());
    let secondEmployess = Number(input.shift());
    let thirdEmployess = Number(input.shift());
    let studentsPerH = firstEmployess + secondEmployess + thirdEmployess;
    let time = 0;

    for (let i = 0; i < students; i++) {

        if (i % studentsPerH === 0) {
            time++;
        }
        if (time % 4 === 0) {
            time++;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
softUni(['5', '6', '4', '20']);
//softUni(['1', '2', '3', '45']);
//softUni(['3', '2', '5', '40']);
