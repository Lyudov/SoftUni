function cardGame(input) {

    let personListInfo = {};
    let sorted = input.map(el => el.split(': '));

    for (const currentInfo of sorted) {
        const personName = currentInfo[0]
        let personCard = currentInfo[1];
        if (!personListInfo.hasOwnProperty(personName)) {
            personListInfo[personName] = [];
        }
        personListInfo[personName].push(personCard);
    }
    let cardArray = []
    for (const key in personListInfo) {
        let currentKey = personListInfo[key]
        cardArray.push(currentKey)
    }
    console.log(cardArray);
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',   // 2 , 12, 27, 56, 48

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',
    // Peter: 167 Tomas: 175 Andrea: 197
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'   // 22,22,22,22,22,22

]);
