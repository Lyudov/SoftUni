function tripiesOfLatinLetters(num) {

    let stringToNum = Number(num);

    for (let i = 0; i < stringToNum; i++) {
        let firstLatter = String.fromCharCode(97 + i);

        for (let j = 0; j < stringToNum; j++) {
            let secondLatter = String.fromCharCode(97 + j);

            for (let x = 0; x < stringToNum; x++) {
                let thirdLatter = String.fromCharCode(97 + x);
                console.log(`${firstLatter}${secondLatter}${thirdLatter}`);
            }
        }
    }
}
tripiesOfLatinLetters('3');
tripiesOfLatinLetters(2);
