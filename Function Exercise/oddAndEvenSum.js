function oddAndEvenSum(num) {

    let current = String(num)
    let odd = 0;
    let even = 0;

    for (let i = 0; i < current.length; i++) {
        let currentNum = Number(current[i]);
        if (currentNum % 2 === 0) {
            even += currentNum;
        } else {
            odd += currentNum;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
oddAndEvenSum(3495892137259234);
