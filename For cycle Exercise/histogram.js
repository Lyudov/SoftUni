function histogram(input) {

    let index = 0;
    let num = Number(input[index]);
    index++;

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 0; i < num; i++) {
        let currentNum = Number(input[index]);
        index++;
        if (currentNum < 200) {
            p1Count++;
        } else if (currentNum >= 200 && currentNum <= 399) {
            p2Count++;
        } else if (currentNum >= 400 && currentNum <= 599) {
            p3Count++;
        } else if (currentNum >= 600 && currentNum <= 799) {
            p4Count++;
        } else {
            p5Count++;
        }

    }

    let p2 = p2Count / num * 100;
    let p1 = p1Count / num * 100;
    let p3 = p3Count / num * 100;
    let p4 = p4Count / num * 100;
    let p5 = p5Count / num * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histogram(["3", "1", "2", "999"]);