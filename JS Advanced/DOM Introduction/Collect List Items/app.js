function extractText() {
    const items = document.getElementById('items').children
    const itemArray = Array.from(items);
   
    const result =  itemArray.map(li => li.textContent).join('\n');
    document.getElementById('result').value = result;

    // const list = document.getElementById('items');
    // const items = Array.from(list.children);

    // const result = items
    // .map(li => li.textContent)
    // .join('\n');

    // const output = document.getElementById('result');
    // output.value = result;

}
