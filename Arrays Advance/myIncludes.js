let myArr = [10, 20, 30, 40, 50];

console.log(myIncludes(myArr, 20));
console.log(myIncludes(myArr, -20));


function myIncludes(arr, value) {

    for (let el of arr) {
        if (el === value) {
            return true;
        }
    }
    return false
}
