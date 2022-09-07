function lasKNumbersSequence(n, k) {

    let res = [1];
    for (let i = 0; i < n - 1; i++) {
        let sequenceK = res.slice(-k);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;

        }
        res.push(sum);
    }
    console.log(res.join(" "));
}
lasKNumbersSequence(6, 3);
//lasKNumbersSequence(8, 2);
