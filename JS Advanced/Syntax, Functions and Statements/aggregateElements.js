function aggregateElements(arr) {

console.log(aggregate(arr, x => x));
console.log(aggregate(arr, x => 1/x));
console.log(aggregate(arr, x => x.toString()));
function aggregate(arr,func) {

    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        result += func(arr[i]);
    }
    return result;
}

}
aggregateElements([1, 2, 3]);
