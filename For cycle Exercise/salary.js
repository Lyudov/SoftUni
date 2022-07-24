function salary(input) {

    let tab = Number(input[0]);
    let salaryMoney = Number(input[1]);

    let fine = 0;

    for (let i = 1; i <= tab + 1; i++) {
        let nTab = input[i];
        if (nTab === "Facebook") {
            salaryMoney -= 150;
            if (salaryMoney <= 0) {
                console.log("You have lost your salary."); break;
            }
        } else if (nTab === "Instagram") {
            salaryMoney -= 100;
            if (salaryMoney <= 0) {
                console.log("You have lost your salary."); break;
            }
        } else if (nTab === "Reddit") {
            salaryMoney -= 50;
            if (salaryMoney <= 0) {
                console.log("You have lost your salary."); break;
            }
        }
    }

    if (salaryMoney !== 0) {
        console.log(`${salaryMoney}`);
    }
}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])