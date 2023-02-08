function solve() {

  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const btn = document.getElementById("formatItBtn");

  const sentences = input.split(". ");
  const filteredSentences = sentences.filter(sentence => sentence.trim());
  output.innerHTML = "";

  if (filteredSentences.length <= 3) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = filteredSentences.join(". ");
  } else {
    for (let i = 0; i < filteredSentences.length; i += 3) {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = filteredSentences.slice(i, (i + 3)).join(". ")
      output.appendChild(paragraph);
      debugger
    }
  }
}

