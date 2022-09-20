function englishNameOfTheLastDigits(num) {

    let lastdigtis = num % 10;

    if (lastdigtis === 0) {
        console.log("zero");
    } else if (lastdigtis === 1) {
        console.log("one");
    } else if (lastdigtis === 2) {
        console.log("two");
    } else if (lastdigtis === 3) {
        console.log("three");
    } else if (lastdigtis === 4) {
        console.log("four");
    } else if (lastdigtis === 5) {
        console.log("five");
    } else if (lastdigtis === 6) {
        console.log("six");
    } else if (lastdigtis === 7) {
        console.log("seven");
    } else if (lastdigtis === 8) {
        console.log("eight");
    } else if (lastdigtis === 9) {
        console.log("nine");
    }

}
englishNameOfTheLastDigits(519);
