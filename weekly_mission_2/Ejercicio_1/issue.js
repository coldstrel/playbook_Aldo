const issue = {
    title: "First Issue",
    repositoryNameAssociated: "Repositorio de Aldo",
    status: "Closed",
    numberOfComments: 10,
    labels: ['primero', 'issue'],
    author: "aldo",
    dateCreated: "2022",
    lastUpdated: "2022",

    getTitleAndAuthor: function() {
        return `This issue ${this.title} is ${this.status} and has ${this.numberOfComments} comments`
    },

    getGeneralInfo: function() {
        return `Repository Name Associated: ${this.repositoryNameAssociated} \n Labels ${this.labels}`
    }
}

console.log("Autor y Titulo del repositorio: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo());