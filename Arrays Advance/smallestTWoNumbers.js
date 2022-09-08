function smallestTWoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.slice(0, 2).join(' '));
}
smallestTWoNumbers([30, 15, 50, 5]);
//smallestTWoNumbers([3, 0, 10, 4, 7, 3]);
