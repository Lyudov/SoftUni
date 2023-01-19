function addAndRemove(arr) {

    let newArr = [];
    let counter = 1;
    for (const command of arr) {
        if (command === "add") {
            newArr.push(counter++)
        }
        if (command === "remove") {
            newArr.pop(counter++)
        }

    }
    if (!newArr.length) {
        console.log("Empty");

    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemove(['add',

'add',

'add',

'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])
