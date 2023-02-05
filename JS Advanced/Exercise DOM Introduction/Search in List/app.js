function search() {

   const itemList = Array.from(document.querySelectorAll('#towns li'));
   const searchTxt = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let counter = 0;

   itemList.forEach(el => {
      if (el.textContent.includes(searchTxt)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline'
         counter++
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
   });
   result.textContent = `${counter} matches found`
  
}
