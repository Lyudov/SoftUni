function hotelRoom(input) {

    let month = input[0];
    let countOvernight = Number(input[1]);

    let resultApartment = 0;
    let resultStudio = 0;

    switch (month) {
        case "May":
        case "October":
            resultStudio = 50;
            resultApartment = 65;
            if (countOvernight > 7 && countOvernight < 14) {
                resultStudio -= resultStudio * 0.05;
            } else if (countOvernight > 14) {
                resultStudio -= resultStudio * 0.3;
                resultApartment -= resultApartment * 0.1;
            } break;
        case "June":
        case "September":
            resultStudio = 75.20;
            resultApartment = 68.70;
            if (countOvernight > 14) {
                resultStudio -= resultStudio * 0.2;
                resultApartment -= resultApartment * 0.1;
            } break;
        case "July":
        case "August":
            resultStudio = 76;
            resultApartment = 77;
            if (countOvernight > 14) {
                resultApartment -= resultApartment * 0.1;
            } break;

    }
    let priceApartment = countOvernight * resultApartment;
    let priceStudio = countOvernight * resultStudio;
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRoom(["August", "20"]);