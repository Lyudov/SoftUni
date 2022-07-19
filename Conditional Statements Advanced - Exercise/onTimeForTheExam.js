function onTimeForTheExam(input) {

    let hExam = Number(input[0]);
    let mExam = Number(input[1]);
    let hComing = Number(input[2]);
    let mComing = Number(input[3]);

    let timeExam = hExam * 60 + mExam;
    let timeComing = hComing * 60 + mComing;
    let diff = Math.abs(timeExam - timeComing);

    if (timeExam < timeComing) {
        console.log("Late");
        let h = Math.floor(diff / 60)
        let m = diff % 60;
        if (diff >= 60) {

            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (timeComing === timeExam || timeExam - timeComing <= 30) {
        console.log("On Time");
        if (diff > 0) {
            let m = diff % 60;
            console.log(`${m} minutes before the start`);
        }
    } else if (timeExam - timeComing > 30) {
        console.log("Early");
        let h = Math.floor(diff / 60)
        let m = diff % 60;
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }

    }

}
onTimeForTheExam(["11", "30", "10", "30"])