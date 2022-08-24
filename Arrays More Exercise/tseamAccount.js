function tseamAccount(arr) {

    let account = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let event = arr[i].split(' ');
        let command = event[0];
        let game = event[1];

        if (command === 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }

        } else if (command === 'Uninstall') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
            }

        } else if (command === 'Update') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
                account.push(game);
            }

        } else if (command === 'Expansion') {
            game = game.split('-')
            let gameExpansion = game[0];
            let expansion = game[1];
            if (account.includes(gameExpansion)) {
                let index = account.indexOf(gameExpansion);
                account.splice(index + 1, 0, `${gameExpansion}:${expansion}`);
            }

        } else if (command === 'Play!') {
            console.log(account.join(' '));
            break;
        }
    }
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW',

    'Update Diablo', 'Expansion CS-Go', 'Play!']);
