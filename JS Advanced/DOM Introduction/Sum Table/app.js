function sumTable() {

    const table = document.querySelector("table");
    const lastColumn = table.querySelectorAll("td:last-child");
    let sum = 0;

    for (let i = 0; i < lastColumn.length-1; i++) {
        sum += parseFloat(lastColumn[i].textContent);
console.log(sum)
    }
    document.getElementById("sum").innerHTML = sum;
}
