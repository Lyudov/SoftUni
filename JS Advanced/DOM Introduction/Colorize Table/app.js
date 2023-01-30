function colorize() {

    const rows = document.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const rowName = rows[i];
        if (i % 2 !== 0) {
            rowName.style.backgroundColor = 'Teal';
        }
    }
}
