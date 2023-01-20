function listOfNames(arr) {

    arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        let curr = `${counter}.${arr[i]}`
        counter++;
        console.log(curr);
    }

}
listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"])
