function calc() {
    const firstNum = document.getElementById('num1');
    const secondNum = document.getElementById('num2');
    const sum = document.getElementById('sum');
    const result = Number(firstNum.value) + Number(secondNum.value);
    sum.value = result
}
