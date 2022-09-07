function myFilter() {

    let myArr = ['one', 'two', 'three', 'four'];
    let longWords = myArr.filter(x => x.length > 3);
    console.log(longWords);

}
myFilter();
