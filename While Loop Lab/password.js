function password(input) {

    let index = 0;
    let name = input[index];
    index++;
    let passW = input[index];
    index++;
    let passWIn = input[index];
    index++;

    while (passWIn !== passW) {
        passWIn = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);

}
password(["Gosho", "secret", "secret"]);