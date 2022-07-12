function timePlus15Minutes(input) {
    let houer = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = houer * 60 + minutes + 15;
    let totalHouers = Math.floor(totalTime / 60);
    let totalMinutes = totalTime % 60;
    if (totalHouers >= 24) {
        totalHouers = 0;
    }
    if (totalMinutes < 10) {
        console.log(`${totalHouers}:0${totalMinutes}`);
    } else {
        console.log(`${totalHouers}:${totalMinutes}`);
    }

}
timePlus15Minutes(["23", "59"]);