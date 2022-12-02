function plantDiscovery(input) {

    let countPlants = Number(input.shift());
    let info = {};
    for (let i = 0; i < countPlants; i++) {
        let currPlants = input.shift();
        let [plantName, rarity] = currPlants.split('<->')

        info[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    let command = input.shift();
    while (command !== 'Exhibition') {
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        if (info[plantName]) {


            if (commandName === 'Rate') {
                let rating = Number(argument);
                info[plantName].ratings.push(rating);
            }

            if (commandName === 'Update') {
                let rarity = Number(argument);
                info[plantName].rarity = rarity;
            }

            if (commandName === 'Reset') {
                info[plantName].ratings.splice(0);
            }
        } else {
            console.log('error');
        }
        command = input.shift();
    }

    let sortedRarity = Object.entries(info);
    sortedRarity.sort((a, b) => a.rarity - b.rarity)
    console.log(`Plants for the exhibition:`);
    for (const plant in info) {
        let sum = 0;
        let ratingsLength = info[plant].ratings.length;
        for (const rating of info[plant].ratings) {
            sum += rating;

        }
        let averageRating = sum / ratingsLength;
        if (!averageRating) {
            averageRating = 0;
        }

        console.log(`- ${plant}; Rarity: ${info[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}
plantDiscovery((["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]));
