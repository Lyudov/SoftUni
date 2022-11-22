function activationKeys(input) {

    let key = input.shift()
    let line = input.shift()
    while (line !== "Generate") {

        let splitedLine = line.split('>>>');

        let command = splitedLine[0];

        if (command === 'Slice') {

            let startIndex = Number(splitedLine[1]);
            let endIndex = Number(splitedLine[2]);

            let res = key.slice(startIndex, endIndex)
            key = key.split(res).join('');
            console.log(key);
        }
        if (command === 'Flip') {

            let currentCommand = splitedLine[1];
            let startIndex = Number(splitedLine[2]);
            let endIndex = Number(splitedLine[3]);
            if (currentCommand === 'Upper') {

                let res = key.slice(startIndex, endIndex)
                key = key.replace(res, res.toUpperCase())
                console.log(key);

            } else if (currentCommand === 'Lower') {
                let res = key.slice(startIndex, endIndex);
                key = key.replace(res, res.toLowerCase());
                console.log(key);
            }
        }

        if (command === 'Contains') {
            let substring = splitedLine[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"]));
