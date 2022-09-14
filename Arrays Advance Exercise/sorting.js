function sorting(input) {

    let array = input.map(Number).sort((a, b) => {
        return a - b
    });

    let copyArray = array.slice(0);
    let res = [];


    for (let i = 0; i < array.length; i++) {
        res.push(copyArray[copyArray.length - 1]);
        if (res.length === array.length) {
            break;
        }
        res.push(copyArray[0]);
        if (res.length === array.length) {
            break;
        }
        copyArray.shift();
        copyArray.pop();

    }

    console.log(res.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
