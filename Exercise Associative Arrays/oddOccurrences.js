function oddOccurrences(words) {

    let resultObject = {};
    let allWords = words
        .split(' ')
        .map(w => w.toLowerCase())

    for (let word of allWords) {
        if (resultObject[word] == undefined) {
            resultObject[word] = 1;
        } else {
            resultObject[word]++;
        }
    }
    let result = '';

    for (let word of allWords) {
        if (resultObject[word] % 2 === 1) {
            result += `${word} `;
            delete resultObject[word];
        }
    }

    console.log(result);

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// function oddOccurrences(words) {

//     let resultObject = {};
//     let allWords = words
//         .split(' ')
//         .map(w => w.toLowerCase())
//     let allWordsLength = allWords.length;

//     for (let i = 0; i < allWordsLength; i++) {
//         if (!resultObject.hasOwnProperty(allWords[i])) {
//             resultObject[allWords[i]] = [];
//         }
//         resultObject[allWords[i]].push(i)
//     }
//     let sorted = Object.entries(resultObject).sort((a, b) => a[1][0] - b[1][0]); // [1] - value [0] - key , сортираме по повтаряемост
//     let result = '';


//     for (const el of sorted) {
//         console.log(el);
//         if (el[1].length % 2 !== 0) { // el[1].length  дължината на стойността на ключа
//             result += `${el[0]} `;
//         }
//     }
//     console.log(result);
// }
// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
