function blackFlag(input) {

    let days = Number(input.shift());
    let daylyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {

        totalPlunder += daylyPlunder

        if (i % 3 === 0) {
            totalPlunder += daylyPlunder / 2;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }
    if (totalPlunder >= expectedPlunder) {

        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)

    } else {

        let percentPlunder = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentPlunder.toFixed(2)}% of the plunder.`);
    }
}

//blackFlag(["5", "40", "100"]);

blackFlag(["10", "20", "380"]);
