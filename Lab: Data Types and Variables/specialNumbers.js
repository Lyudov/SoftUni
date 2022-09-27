function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let numToString = i.toString();
        let stringLength = numToString.length;

        for (let j = 0; j < stringLength; j++) {

            if (i >= 10) {
                sum += Number(numToString[j]);
            } else {
                sum += Number([i]);
            }
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}
specialNumbers(15);
