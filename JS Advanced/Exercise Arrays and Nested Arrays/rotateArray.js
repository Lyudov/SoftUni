function rotateArray(arr, parametar) {

    for (let i = 0; i < parametar; i++) {
        let fromLeft = arr.pop();
        arr.unshift(fromLeft)
    }
    console.log(arr.join(' '));
}
rotateArray(['1',

    '2',

    '3',

    '4'],

    2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
