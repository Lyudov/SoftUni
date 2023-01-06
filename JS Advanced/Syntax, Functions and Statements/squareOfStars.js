// function squareOfStars(input) {

//     let res = '*';
// for(let i = 1; i <= input; i++) {
//     console.log(`${(res.repeat(input)).trim()}`);
// }

// }
// squareOfStars(2);


function squareOfStars(n) {
    let star = '* ';
    if (n === null || n === ' ' || n === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    }
}
squareOfStars(5)
