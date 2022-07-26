function building(input) {

    let x = Number(input[0]);
    let y = Number(input[1])


    for (let floor = x; floor > 0; floor--) {
        let buff = "";
        for (let door = 0; door < y; door++) {
            if (x === floor) {
                buff += `L${floor}${door} `
            } else if (floor % 2 === 0) {
                buff += `O${floor}${door} `
            } else {
                buff += `A${floor}${door} `
            }
        }
        console.log(`${buff}`);
    }

}
building(["6", "4"])
