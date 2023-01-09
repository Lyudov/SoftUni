function roadRadar(speed, area) {

    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let difference = 0;
    let status = '';
    
    if (area === 'motorway') {
        if (speed > motorwayLimit) {
            difference = speed - motorwayLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if ( difference > 40 ) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        } else if (speed <= motorwayLimit) {
console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        }
    }
    if (area === 'interstate') {
        if (speed > interstateLimit) {
            difference = speed - interstateLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if ( difference > 40 ) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        } else if (speed <= interstateLimit) {
console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        }
    }
    if (area === 'city') {
        if (speed > cityLimit) {
            difference = speed - cityLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if ( difference > 40 ) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        } else if (speed <= cityLimit) {
console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        }
    }
    if (area === 'residential') {
        if (speed > residentialLimit) {
            difference = speed - residentialLimit;
            if(difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else if ( difference > 40 ) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        } else if (speed <= residentialLimit) {
console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        }
    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
