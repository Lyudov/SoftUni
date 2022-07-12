function lunchBreak(input) {

    let moveName = input[0];
    let durationEpisod = Number(input[1]);
    let durationBreak = Number(input[2]);

    let timeForLunch = durationBreak / 8;
    let timeForRelax = durationBreak / 4;

    let totalTime = durationEpisod + timeForLunch + timeForRelax;
    let difference = Math.abs(totalTime - durationBreak);

    if (totalTime <= durationBreak) {
        console.log(`You have enough time to watch ${moveName} and left with ${Math.ceil(difference)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${moveName}, you need ${Math.ceil(difference)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf", "48", "60"]);
