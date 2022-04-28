// Creacion de un objeto con metodos

// const pongo = {
//     name: 'Pongo',
//     sayHello: () => { console.log(`${this.name} dice HOLA!!!!!`) }
// }

// pongo.sayHello()

const pongo = {
    name: 'Pongo',
    sayHello: function() { console.log(`${this.name} dice HOLA!!!!!`) }
}

pongo.sayHello()