function dayOfWeek(input) {

    let result;
    let isValid = true;
    switch (input) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default:
            isValid = false;
    }

    if (isValid) {
        console.log(result);
    } else {
        console.log('error');
    }
}
dayOfWeek('Monday');
dayOfWeek('Sunday');
dayOfWeek('Invalid');
