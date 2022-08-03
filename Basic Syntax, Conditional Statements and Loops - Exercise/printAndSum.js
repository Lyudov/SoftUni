function printAndSum(startNum, endNum) {

    let sumNum = 0;
    let printNum = '';

    for (let i = startNum; i <= endNum; i++) {
        printNum += i + ' ';
        sumNum += i;
    }
    console.log(printNum);
    console.log(`Sum: ${sumNum}`);
}
printAndSum(50, 60);