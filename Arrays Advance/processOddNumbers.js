function processOddNumbers(numbers) {

    let filterElements = numbers.filter((el, i) => i % 2 == 1);

    let doubledNums = filterElements.map(x => x * 2);
    console.log(doubledNums.reverse().join(' '));

}
processOddNumbers([10, 15, 20, 25]);
