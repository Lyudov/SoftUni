function myFilter() {

    let myArr = ['one', 'two', 'three', 'four'];
    let longWords = myArr.filter(x => x.length > 3);
    console.log(longWords);

    let nums = [5, -11, 3, -2, 8];
    let positiveNums = nums.filter(x => x > 0);
    console.log(positiveNums);

}
myFilter();
