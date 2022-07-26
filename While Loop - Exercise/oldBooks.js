function oldBooks(input) {


    let favBook = input[0]

    let index = 1;
    let isFoundBook = false;
    let nextBook = input[index];


    while (nextBook !== "No More Books") {
        if (nextBook === favBook) {
            isFoundBook = true;
            break;

        }
        index++
        nextBook = input[index];

    }

    if (isFoundBook === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest",  "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])
