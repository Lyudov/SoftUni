function login(arr) {

    let userName = arr.shift();
    let password = userName.split('').reverse().join('')
    let trying = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        let command = arr[i]

        while (command !== password) {
            trying++;

            if (trying > 3) {
                console.log(`User ${userName} blocked!`);
                break;
            }

            console.log(`Incorrect password. Try again.`);
            command = arr.shift()
            command = arr[i]
        }

        if (command === password) {
            console.log(`User ${userName} logged in.`);
        }
    }
}
//login(['Acer', 'login', 'go', 'let me in', 'recA']);
//login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
login(['momo', 'omom']);
