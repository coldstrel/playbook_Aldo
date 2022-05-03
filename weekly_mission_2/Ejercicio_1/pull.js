const pullRequest = {
    title: 'Por favor dejame hacer la pull request',
    branchName: "main",
    dateCreated: new Date(),
    status: "OPEN",
    repositoryNameAssociated: "Mi Primer Repo",

    getStatus: function() {
        return `The status of the pull request is ${this.status}`
    },

    getTitleAndAuthor: function() {
        return `El nombre del request es "${this.title}" la fecha de creacion es ${this.dateCreated}`
    }
}


console.log("Estado del pull request: " + pullRequest.getStatus())
console.log("Nombre y fecha de creacion: \n" + pullRequest.getTitleAndAuthor())