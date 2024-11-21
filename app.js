const catalogoPeliculas = require("./peliculas")

for (let i = 0; i < catalogoPeliculas.length; i++) {
    console.log(catalogoPeliculas[i]);
}


const fs = require('fs');
const mensaje= fs.readFileSync('./mensaje.txt',"utf-8");

console.log(mensaje);




