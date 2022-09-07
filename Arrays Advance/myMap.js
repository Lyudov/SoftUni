function myMap() {
    let myArr = ['1', '2', '3', '4'];
    let lengths = myArr.map(x => Number(x) + 1);
    console.log(myArr);
    console.log(lengths);
}
myMap();
