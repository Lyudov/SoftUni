function shoppingList(input) {

    let productList = input.shift().split('!');

    let commands = input.slice();
    let currentLine = commands.shift();

    while (currentLine != "Go Shopping!") {
        let currentInput = currentLine.split(' ');
        let command = currentInput[0];
        let firstItem = currentInput[1];
        let secondItem = currentInput[2];

        switch (command) {
            // "Urgent {item}" - add the item at the start of the list. If the item already exists, skip this command.
            case 'Urgent':
                if (!productList.includes(firstItem)) {
                    productList.unshift(firstItem);
                } 
                break;
               
            //·  "Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
            case 'Unnecessary':
                // productList = productList.filter(x =>x != firstItem);
                let itemIndex = productList.indexOf(firstItem);
                if (itemIndex > -1) {
                    productList.splice(itemIndex, 1);
                } 
                break;
              
            //"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
            case 'Correct':

                if (productList.includes(firstItem)) {

                    let upIndex = productList.indexOf(firstItem);
                    productList.splice(upIndex, 1, secondItem);
                } 
                 break;
            
            //"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
            case 'Rearrange':
                if (productList.includes(firstItem)) {
                    let rearrangeIndex = productList.indexOf(firstItem);
                    productList.splice(rearrangeIndex, 1);
                    productList.push(firstItem);
                } 
                 break;          
        }
        currentLine = commands.shift();
    }

    console.log(productList.join(", "));

}
shoppingList((["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes",  "Go Shopping!"]));
shoppingList((["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes","Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]));
