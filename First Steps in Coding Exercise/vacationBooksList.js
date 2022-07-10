function vacationBooksList(input) {

    let countPages = Number(input[0]);
    let pagesForHouer = Number(input[1]);
    let countDays = Number(input[2]);

    let houers = (countPages / pagesForHouer) / countDays;
    console.log(houers);
}
vacationBooksList(["432 ", "15 ", "4 "]);