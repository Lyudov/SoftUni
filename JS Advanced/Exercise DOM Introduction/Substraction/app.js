function subtract() {
    const num1 = document.getElementById("firstNumber").value
    const num2 = document.getElementById("secondNumber").value
    const result = document.getElementById("result");
   
    const sum = parseFloat(num1) - parseFloat(num2);
    result.textContent = sum;
}
