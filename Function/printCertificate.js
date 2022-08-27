function printCertificate(grade, nameArr) {
    printHeader();
    printName(nameArr);
    formatGrade(grade);



    function printHeader() {

        console.log('~~~-   {@}   -~~~');

        console.log('~- Certificate -~');

        console.log('~~~-  ~---~  -~~~');

    }

    function printName(nameArr) {

        console.log(nameArr[0] + ' ' + nameArr[1]);

    }

    function formatGrade(grade) {

        let currentGrade = '';
        if (grade < 3.00) {
            currentGrade = 'Fail (2)';
        } else if (grade < 3.50) {
            currentGrade = (`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.50) {
            currentGrade = (`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.50) {
            currentGrade = (`Very good (${grade.toFixed(2)})`);
        } else {
            currentGrade = (`Excellent (${grade.toFixed(2)})`);
        }
        console.log(currentGrade);
    }

}
printCertificate(5.25, ['Peter', 'Carter']);
