function validate() {
    const input = document.getElementById("email");
    const patternEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const isValidEmail = patternEmail.test(input.value);
  
    if (isValidEmail) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
    document.getElementById("email").addEventListener("change", validate);
    
}
  
