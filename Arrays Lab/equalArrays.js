function equalArrays(firstArr, secondArr) {

    let firstArrLength = firstArr.length;
    let secondArrLength = secondArr.length;
    let sum = 0;

    for (let i = 0; i < firstArrLength; i++) {
        firstArr[i] = Number(firstArr[i]);
    }
    for (let k = 0; k < secondArrLength; k++) {
        secondArr[k] = Number(secondArr[k]);
    }
    let areEqual = true;
    for (let j = 0; j < firstArrLength; j++) {

        if (firstArr[j] !== secondArr[j]) {
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            areEqual = false;
            break;
        } else {
            sum += firstArr[j];
            areEqual = true;

        }

    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
//equalArrays(['1'], ['10']);
//equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
