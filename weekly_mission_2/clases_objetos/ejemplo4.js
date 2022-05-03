//Ejemplo 4: metodos en los objetos

class Repository {
    constructor(name, author, language, stars) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.stars = stars;
    }

    getInfo() { //Funcion para sacar la informacion
        return `Repository ${this.name} has ${this.stars}`
    }
}

const myRepo = new Repository('LaunchX', 'AldoEfer', 'JS', '10');
console.log(myRepo.getInfo())