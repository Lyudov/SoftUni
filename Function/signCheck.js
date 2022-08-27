function signCheck(num1, num2, num3) {

    let res;
    if (num1 < 0) {
        if (num2 >= 0 && num3 >= 0) {
            res = "Negative";
        } else if (num2 < 0 && num3 < 0) {
            res = "Negative";
        } else if (num2 >= 0 && num3 < 0) {
            res = "Positive";
        } else if (num2 < 0 && num3 >= 0) {
            res = "Positive";
        }

    } else if (num1 >= 0) {
        if (num2 >= 0 && num3 >= 0) {
            res = "Positive";
        } else if (num2 < 0 && num3 < 0) {
            res = "Positive";
        } else if (num2 >= 0 && num3 < 0) {
            res = "Negative";
        } else if (num2 < 0 && num3 >= 0) {
            res = "Negative";
        }

    }
    console.log(res);
}
signCheck(-5,1,1);
signCheck(5,14,-2);
signCheck(19,-1,-5);
