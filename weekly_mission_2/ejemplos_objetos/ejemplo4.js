// Creacion de un objeto con metodo que recibe parametros

const myPet = {
    name: 'Pongo',
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`);
    }
}


myPet.sayHelloToMyPet("Tulio");