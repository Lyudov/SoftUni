function sortByTwoCriteria(arr) {

arr.sort((a,b)=> a.length - b.length || a.localeCompare(b))

return arr.join('\n')
}
console.log(sortByTwoCriteria(['alpha',

'beta','gamma']));
console.log(sortByTwoCriteria(['test', 'Deny','omen', 'Default']));
