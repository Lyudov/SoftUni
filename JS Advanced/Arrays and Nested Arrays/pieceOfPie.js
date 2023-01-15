function pieceOfPie(arr, firstString, secondString) {

    let firstIndex = 0;
    let secondIndex = 0;
    for (let i = 0; i <= arr.length; i++) {
        let currPie = arr[i];
        if (currPie === firstString) {
            firstIndex = arr.indexOf(currPie)
        } else if (currPie === secondString) [
            secondIndex = arr.indexOf(currPie)
        ]
    }
    let finalPiece = arr.slice(firstIndex, secondIndex+1)
    return finalPiece
}
console.log(pieceOfPie(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie'));
