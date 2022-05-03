// Ejemplo 5: Atributos con valores por default

class Pullrequest {
    constructor(repo, title, linesChanged) {
        this.repo = repo;
        this.title = title;
        this.linesChanged = linesChanged

        this.status = "OPEN"
        this.dateCreated = new Date() //Fecha de cuando se instancia el objeto
    }

    getInfo() {
        return `this PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}}`
    }

}

const myPR = new Pullrequest('LaunchX', 'Miprimer PR', 100);
console.log(myPR.getInfo());

// puedes instanciar n cantidad doe objetos de la misma clase

const myPR2 = new Pullrequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())