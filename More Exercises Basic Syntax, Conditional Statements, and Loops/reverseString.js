function reverseString(word) {

    let wordInArr = word.length
    let newArray = [];
    for (let i = 0; i <= wordInArr; i++) {
        newArray.push(word[i])
    }
    console.log(newArray.reverse().join("")); 
}
reverseString('1234');
