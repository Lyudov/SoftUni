function amazingNumbers(num) {
    let numToString = String(num)
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    console.log(`${num} Amazing? ${result.toString().indexOf("9") >= 0 ? "True" : "False"}`);

}
amazingNumbers(1233);
