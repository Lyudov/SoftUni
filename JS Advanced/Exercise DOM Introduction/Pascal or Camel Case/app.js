function solve() {

  const input = document.getElementById("text").value;
  const conventionText = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const toPascal = (text) => text.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("");
  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  if (conventionText === "Pascal Case") {
    result.textContent = toPascal(input);
  } else if (conventionText === "Camel Case") {
    result.textContent = toCamelCase(input);
  } else {
    result.textContent = "Error!"
  }

}
