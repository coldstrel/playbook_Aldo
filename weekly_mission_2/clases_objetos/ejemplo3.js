// Ejemplo 3: Intanciar un objeto con atributos

class Student {
    constructor(name, age, subjects) {
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
}

const carlosStudent = new Student('Aldo', 24, ['NodeJS', 'Python']);

console.log("Atributos del objeto\n")
console.log(carlosStudent)