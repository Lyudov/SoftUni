function inventory(input) {

    let gameList = [];
let sorted = input.map(el=>el.split(' / '))

for (const items of sorted) {
    let [name, level, gameItems] = items;
   let currHero = {
    name,
    level: Number(level),
    gameItems,
   }
gameList.push(currHero)
}
gameList.sort((a,b)=>a.level - b.level);

gameList.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.gameItems}`);
});
}
