function divisionWithoutResidues(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < n; i++) {
        let nRow = Number(input[index]);
        index++;

        if (nRow % 2 === 0) {
            p1++;
        }
        if (nRow % 3 === 0) {
            p2++;
        }
        if (nRow % 4 === 0) {
            p3++;
        }

    }

    //let p1Count 
    p1 = p1 / n * 100;
    //let p2Count 
    p2 = p2 / n * 100;
    //let p3Count 
    p3 = p3 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}
divisionWithoutResidues(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);