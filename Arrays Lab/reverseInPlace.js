function reverseInPlace(arr) {
    let k = arr.length - 1;;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]; //a
        arr[i] = arr[k - i];
        arr[k - i] = temp;
    }
    console.log(arr.join(" "));
}
//reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);