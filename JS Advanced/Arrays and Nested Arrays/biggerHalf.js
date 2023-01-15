function biggerHalf(arr) {

arr.sort((a,b)=> a-b);
let secondHalf = arr.length / 2;
arr.splice(0,secondHalf);
return arr

}
console.log(biggerHalf([4, 7, 2, 5,3]));
