//ejemplo 6: Getters para acceder a los atributos del objeto

class ajolonauta {
    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    get getExercisesCompleted() {
        return this.exercises_completed
    }
}


const woopa = new ajolonauta('Pongo', 1, [])
console.log(woopa.getExercisesCompleted)