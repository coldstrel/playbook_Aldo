// Ejemplo 9: Uso del reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result_of_reduce = numbers.reduce((acc, element) => acc + element, 0)
console.log(result_of_reduce)