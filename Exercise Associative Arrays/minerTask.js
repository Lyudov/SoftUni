function minerTask(input) {

    let resourceList = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = Number(input[i + 1]);

        if (!resourceList.hasOwnProperty(resource)) {
            resourceList[resource] = 0;
        }
        resourceList[resource] += quantity;

    }
    for (const kvp in resourceList) {
        console.log(`${kvp} -> ${resourceList[kvp]}`);
    }
}
minerTask([

    'Gold',

    '155',

    'Silver',

    '10',

    'Copper',

    '17',
    'Gold',

    '5',

]); 
