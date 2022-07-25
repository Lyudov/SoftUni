function sequence2k1(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let k = 1;

    while (k <= n) {
        console.log(k);
        k = k * 2 + 1;

    }

}
sequence2k1(["17"]);