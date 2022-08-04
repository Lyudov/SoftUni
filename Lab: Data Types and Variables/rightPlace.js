function rightPlace(str, char, result) {

    let res = str.replace('_', char);
    let print = res === result ? "Matched" : "Not Matched";
    console.log(print);
}
rightPlace('Str_ng', 'i', 'String');
