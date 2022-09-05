function negativeOrPositiveNumbers(arr) {

    let res = [];
    for (el of arr) {
        el = Number(el);
        if (el < 0) {
            res.unshift(el);
        } else {
            res.push(el);
        }
    }
    console.log(res.join("\n"));

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
