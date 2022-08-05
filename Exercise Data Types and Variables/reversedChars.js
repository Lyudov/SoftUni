// function reversedChars(char1, char2, char3) {

//     console.log(`${char3} ${char2} ${char1}`);

// }
// reversedChars('A', 'B', 'C');

function reversedChars(...params) {
    console.log(params.reverse().join(' '));
}
reversedChars('A', 'B', 'C');