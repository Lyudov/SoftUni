function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {

    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.90;
    let regularFridayPrice = 15;

    let studentsSaturdayPrice = 9.80;
    let businessSaturdayPrice = 15.60;
    let regularSaturdayPrice = 20;

    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.50;

    let studentsDiscount = 15;
    let businessDiscount = 10;
    let regularDiscount = 5;

    let totalPrice = 0;

    if (typeOfGroup === "Business" && groupOfPeople >= 100) {
        groupOfPeople -= businessDiscount;
    }

    if (typeOfGroup === "Students" && dayOfWeek === "Friday") {
        totalPrice += groupOfPeople * studentsFridayPrice;
    } else if (typeOfGroup === "Students" && dayOfWeek === "Saturday") {
        totalPrice += groupOfPeople * studentsSaturdayPrice;
    } else if (typeOfGroup === "Students" && dayOfWeek === "Sunday") {
        totalPrice += groupOfPeople * studentsSundayPrice;
    }
    if (typeOfGroup === "Business" && dayOfWeek === "Friday") {
        totalPrice += groupOfPeople * businessFridayPrice;
    } else if (typeOfGroup === "Business" && dayOfWeek === "Saturday") {
        totalPrice += groupOfPeople * businessSaturdayPrice;
    } else if (typeOfGroup === "Business" && dayOfWeek === "Sunday") {
        totalPrice += groupOfPeople * businessSundayPrice;
    }
    if (typeOfGroup === "Regular" && dayOfWeek === "Friday") {
        totalPrice += groupOfPeople * regularFridayPrice;
    } else if (typeOfGroup === "Regular" && dayOfWeek === "Saturday") {
        totalPrice += groupOfPeople * regularSaturdayPrice;
    } else if (typeOfGroup === "Regular" && dayOfWeek === "Sunday") {
        totalPrice += groupOfPeople * regularSundayPrice;
    }

    if (typeOfGroup === "Students" && groupOfPeople >= 30) {
        totalPrice -= (studentsDiscount / 100) * totalPrice;
    } else if (typeOfGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice -= (regularDiscount / 100) * totalPrice
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
//vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday")