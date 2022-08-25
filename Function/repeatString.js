function repeatString(str, repeat) {
    let newStr = '';
    for (let i = 0; i < repeat; i++) {
        newStr += str;
    }
    return newStr
}
console.log(repeatString("abc", 3));
