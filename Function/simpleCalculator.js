// function simpleCalculator(x, y, operator) {

//     let res = 0;
//     switch (operator) {

//         case 'multiply': res = x * y; break;
//         case 'divide': res = x / y; break;
//         case 'add': res = x + y; break;
//         case 'subtract': res = x - y; break;
//     }
//     console.log(res);
// }
// simpleCalculator(5, 5, 'multiply')

function solve(num1, num2, operator) {
    let mathOp = {
        multiply: '*',
        divide: '/',
        add: '+',
        subtract: '-'
    }
    let doMath = (a, b) => new Function('a', 'b', `return ${a} ${mathOp[operator]} ${b}`)(a, b)
    console.log(doMath(num1, num2));
}
solve(5, 5, 'multiply')
