function carWash(arr) {

    let percentClean = 0;

    for (const el of arr) {
        let command = el.split('').join('');
        if (command === "soap") {
            percentClean += 10;
        } else if (command === "water") {
            percentClean += percentClean * 0.20;
        } else if (command === "vacuum cleaner") {
            percentClean += percentClean * 0.25;
        } else if (command === "mud") {
            percentClean -= percentClean * 0.10;
        }
    }
    console.log(`The car is ${percentClean.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
