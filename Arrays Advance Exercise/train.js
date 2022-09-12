function train(arr) {

    let passengersInTrain = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commandNum = arr[i].split(' ');

        if (commandNum[0] === "Add") {
            passengersInTrain.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersInTrain.length; a++) {
                if (Number(commandNum[0]) + passengersInTrain[a] <= maxCapacity) {
                    passengersInTrain[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
