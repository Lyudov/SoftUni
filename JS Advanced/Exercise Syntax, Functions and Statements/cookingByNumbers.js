function cookingByNumbers(num, oper1, oper2, oper3, oper4, oper5) {

    let arr = [oper1, oper2, oper3, oper4, oper5];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': num = num / 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num = num + 1; break;
            case 'bake': num = num * 3; break;
            case 'fillet': num -= num * 0.2; break;
        }

        console.log(num);
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',

    'fillet')
