function extract(content) {
    let element = document.getElementById("content");
    let text = element.innerText;
    let regex = /\(([^)]+)\)/g;
    let matches = text.match(regex);
    return matches.join("; ")
}
