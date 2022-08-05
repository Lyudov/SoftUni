function spiceMustFlow(startYield) {

    let day = 0;
    let workers = 26;
    let spiceExtracted = 0;
    while (startYield >= 100) {
        day++
        spiceExtracted += startYield - workers;
        startYield -= 10;
    }
    console.log(day);
    if (day > 0) {
        console.log(spiceExtracted - 26);
    } else {
        console.log(spiceExtracted);
    }
}
spiceMustFlow(99);