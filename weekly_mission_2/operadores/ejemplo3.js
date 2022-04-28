// Ejemplo 3: forEach para imprimir los países en letras mayúsculas

const countries = ['MEXICO', 'USA', 'FRANCIA', 'ESPANA', 'SUIZA'];

console.log("Imprimiendo la lista de paises en minusculas")
countries.forEach(country => console.log(`${country.toLowerCase()}`))
console.log("------------------------------------------------")
console.log("Imprimiendo la lista de paises en mayusculas")
countries.forEach(country => console.log(`${country.toUpperCase()}`))