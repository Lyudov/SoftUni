function sortingNum(arr) {

    let newArr = [];
    arr.sort((a, b) => a - b);

    while(arr.length !== 0) {

        newArr.push(arr.shift());
        newArr.push(arr.pop())
    }
    return newArr;

}
console.log(sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
