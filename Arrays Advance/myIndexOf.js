let myArr = [10, 20, 30, 40, 50];

console.log(myIndexOf(myArr, 50));
console.log(myIndexOf(myArr, -100));


function myIndexOf(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
