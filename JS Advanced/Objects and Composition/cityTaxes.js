function cityTaxes(name, population, treasury) {

    function collectTaxes() {
        this.treasury += this.population * this.taxRate
    }

    function applyGrowth(percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    }

    function applyRecession(percentage) {
        this.treasury -= Math.ceil(this.treasury * percentage / 100);
    }
    
    let infoCity = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession,

    }
    return infoCity;

}
const city =

    cityTaxes('Tortuga',

        7000,

        15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
city.applyRecession(15)
console.log(city.treasury);


// function cityTaxes(name, population, treasury) {

//     let infoCity = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury += this.population * this.taxRate
//         },

//         applyGrowth(percentage) {
//             this.population += Math.floor(this.population * percentage / 100);
//         },

//         applyRecession(percentage) {
//             this.treasury -= Math.ceil(this.treasury * percentage / 100);
//         },
//     }
//     return infoCity;

// }
// const city =

// cityTaxes('Tortuga',

// 7000,

// 15000);

// console.log(city);


// const city =

//     cityTaxes('Tortuga',

//         7000,

//         15000);

// city.collectTaxes();

// console.log(city.treasury);

// city.applyGrowth(5);

// console.log(city.population);
// city.applyRecession(15)
// console.log(city.treasury);
