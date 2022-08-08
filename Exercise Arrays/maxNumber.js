function maxNumbers(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let num1 = array[i];
        let isLargest = true;

        for (let j = i + 1; j < arrayL; j++) {
            let num2 = array[j];

            if (num1 <= num2) {
                isLargest = false
            }
        }

        if (isLargest) {
            newArray.push(num1);
        }
    }
    console.log(newArray.join(' '));
}
maxNumbers([1, 4, 3, 2]);
