function addItem() {

    const inputText = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = inputText;

    const btn = document.createElement('a');
    btn.href = '#';
    btn.textContent = '[Delete]';
    li.appendChild(btn);
    btn.addEventListener('click', ()=>li.remove());

    const list = document.getElementById('items');
    list.appendChild(li);

}
