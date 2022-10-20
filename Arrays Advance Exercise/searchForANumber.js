function searchForANumber(array, counts) {

    //The first number represents the number of elements you have to take from the first array (starting from the first one).
    let firstCutCount = counts[0];
    let copyArray = array.slice(0, firstCutCount);

    //The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).
    let secondDeleteCount = counts[1];
    copyArray.splice(0, secondDeleteCount,);

    //The third number is the number we search in our collection after the manipulations.
    let searchNumber = counts[2];
    let counter = 0;
    for (let num of copyArray) {
        if (num === searchNumber) {
            counter++;
        }
    }
    // As output print how many times that number occurs in our array in the following format:
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
