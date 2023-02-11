function addItem() {
   
const inputText = document.getElementById('newItemText').value;
const li = document.createElement('li');
li.textContent = inputText;
const list = document.getElementById('items');
list.appendChild(li);

}
