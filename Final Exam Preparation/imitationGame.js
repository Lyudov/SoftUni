function imitationGame(input) {

    let message = input.shift();
    let copyMessage = message.slice()
    let command = input.shift();
    let tempMessage = '';

    while (command !== 'Decode') {

        let splitedLine = command.split('|');

        let currentCommand = splitedLine[0];

        if (currentCommand === 'Move') {

            let firstInstruction = Number(splitedLine[1]);

            let currMessage = copyMessage.substring(0, firstInstruction);

            tempMessage = copyMessage.replace(currMessage, '');

            tempMessage += currMessage

            copyMessage = tempMessage
        }

        if (currentCommand === 'Insert') {

            let index = Number(splitedLine[1]);
            let value = splitedLine[2];
            tempMessage = copyMessage.split('');

            tempMessage.splice(index, 0, value);
            copyMessage = tempMessage.join('');

        }

        if (currentCommand === 'ChangeAll') {

            let substring = splitedLine[1];
            let replacement = splitedLine[2];

            while (copyMessage.includes(substring)) {
                tempMessage = copyMessage.replace(substring, replacement);
                copyMessage = tempMessage;
            }
        }

        command = input.shift();
    }
    console.log(`The decrypted message is: ${copyMessage}`);

}
imitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

]);
