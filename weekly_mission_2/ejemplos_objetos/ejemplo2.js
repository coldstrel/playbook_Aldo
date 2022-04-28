// Creacion de un objeto con diferentes propiedades
const myObject = {

    nombre: 'Aldo',
    edad: 24,
    gamerTag: [
        "coldstrel",
        "Atenea",
        "Kukissss",
        "NSG Cochiloco"
    ],

    juegosFavs: [
        'LoL',
        'Sekiro Shadows Die Twice',
        'Zelda breath of the wild',
        'Forza'
    ]
}


console.log('------ Accediendo a los datos del objeto --------');
console.log('Nombre: ' + myObject.nombre);
console.log('Edad: ' + myObject.edad);


for (var i = 0; i < myObject.gamerTag.length; i++) {
    console.log(`Gamer Tag #${i}:  ${myObject.gamerTag[i]}`);
}
console.log("================================================================");
for (var i = 0; i < myObject.juegosFavs.length; i++) {
    console.log(`Juego Fav #${i}:  ${myObject.juegosFavs[i]}`);
}