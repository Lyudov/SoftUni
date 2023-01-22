function townPopulation(arr) {

    let infoTown = {};
    for (const el of arr) {
        let [townName, population] = el.split('<->')
        if (infoTown.hasOwnProperty(townName)) {
            infoTown[townName] += Number(population);
        } else {
            infoTown[townName] =  Number(population);
        }
    }
    for (const pairs in infoTown) {
        console.log(`${pairs}: ${infoTown[pairs]}`);
    }

    // for(const [name,population] of Object.entries(infoTown)) {
    //     
    // }
}
townPopulation(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000']);
    townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',
    
    'Jerusalem <-> 2352344',
    
    'Mexico City <-> 23401925',
    
    'Istanbul <-> 1000'])
