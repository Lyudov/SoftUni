
function addAndRemove(arr) {

    let move = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            move.push(i + 1)
        } else {
            move.pop();
        }
    }
    if (move.length === 0) {
        console.log("Empty");
    } else {
        console.log(move.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
//addAndRemove(['remove', 'remove', 'remove']);
