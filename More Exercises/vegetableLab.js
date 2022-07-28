function trainingLab(input) {

    let lenghtInMeters = Number(input[0]);
    let widhtInMeters = Number(input[1]);
    let coridor = 100;

    let lenghtInCentimeters = (lenghtInMeters * 100);
    let widhtInCentimeters = (widhtInMeters * 100);
    let totalLenght = Math.floor(lenghtInCentimeters / 120);
    let totalWidht = Math.floor((widhtInCentimeters - coridor) / 70);
    let total = (totalLenght * totalWidht) - 3;

    console.log(total);

}
trainingLab(["8.4", "5.2"]);