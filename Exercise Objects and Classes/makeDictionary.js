function makeDictionary(input) {

    let info = {};
    for (const items of input) {
        let obj = JSON.parse(items);
        info = Object.assign(info, obj);

    }
    let sorted = Object.keys(info);
    sorted.sort((a, b) => a.localeCompare(b));
    for (const el of sorted) {
        let definition = info[el];
        console.log(`Term: ${el} => Definition: ${definition}`);
    }
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);
