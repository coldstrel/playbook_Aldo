// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries.filter(country => country.includes('land'));

console.log(`Countries containing 'LAND': ${countriesContainingLand}`)


const countriesEnding = countries.filter(country => country.endsWith('k'));
console.log(`Countries ending with 'K': ${countriesEnding}`)