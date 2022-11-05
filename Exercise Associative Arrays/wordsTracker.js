function wordsTracker(wordsArray) {

    const words = wordsArray.shift().split(' ')
    console.log(words);
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of wordsArray) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }


}
wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task']);
