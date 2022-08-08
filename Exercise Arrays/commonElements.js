function commonElements(firstArr, secondArr) {

    // for (let i = 0; i < firstArr.length; i++) {
    //     if (secondArr.includes(firstArr[i])) {
    //         console.log(firstArr[i]);
    //     }
    // }
    for (const element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

    ['Petar', 10, 'hey', 4, 'hello', '2']);
