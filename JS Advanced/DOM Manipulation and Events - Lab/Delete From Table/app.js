function deleteByEmail() {

    const inputText = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArray = Array.from(rows);
    let deleted = false;

    for (const row of rowsArray) {
        const col = row.children[1];
        if (col.textContent === inputText) {
            row.remove();
            deleted = true;
        }
    }
    document.getElementById('result').textContent = deleted ? "Deleted." : "Not found."
}
