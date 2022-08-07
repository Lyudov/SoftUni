function dayOfWeek(number) {

    if (number < 1 || number > 7) {
        console.log("Invalid input !");
    } else {
        let dayName = ["Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"];
        console.log(dayName[number - 1]);
    }

}
dayOfWeek([3]);