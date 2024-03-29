function houseParty(arr) {

    let guestArr = [];
    for (let el of arr) {

        let command = el.split(' ');
        let name = command[0];
        if (command.length === 3) {
            if (guestArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestArr.push(name);
            }
        } else {
            if (!guestArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestArr.indexOf(name);
                guestArr.splice(index, 1);
            }
        }
    }
    console.log(guestArr.join('\n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
