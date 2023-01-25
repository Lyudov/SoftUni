function editElement(ref, match, replacer) {
       //const pattern = new RegExp(match,'g');
       const text = ref.textContent;

       //  const result = text.replace(pattern,replacer);
       const result = text.split(match).join(replacer);

         ref.textContent = result; 
}
