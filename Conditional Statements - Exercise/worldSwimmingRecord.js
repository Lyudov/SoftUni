function worldSwimmingRecord(input) {

    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSec = Number(input[2]);

    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let time = distanceInMeters * timeInSec;
    let totalTime = delay + time;
    let diference = Math.abs(recordInSec - totalTime);

    if (totalTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diference.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
