function fishTank(input) {

    let lenghtCm = Number(input[0]);
    let widhtCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]);

    let sum = (lenghtCm * widhtCm * heightCm) * 0.001;
    let totalVolume = sum - (sum * (percent / 100));
    console.log(totalVolume);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);