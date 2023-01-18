function printEveryNthElementFromArr(arr,element) {

    let newArr = [];
for(let i = 0; i < arr.length; i++) {
  if(i % Number(element) === 0) {
    newArr.push(arr[i]);
  }
   
}
return newArr
}
console.log(printEveryNthElementFromArr(['5',

'20',

'31',

'4',

'20'],

2));
console.log(printEveryNthElementFromArr(['dsa', 'asd', 'test', 'tset'], 2))
