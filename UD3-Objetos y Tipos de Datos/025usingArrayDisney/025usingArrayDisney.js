/*025usingArrayDisney.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:
 let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];
*/
"use strict";

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.
disney.push({nombre: "Peter Pan", pelicula: "Peter Pan"});

//Pintar el array


for (const key of disney) {
    document.write("<b>Nombre:</b> " + key.nombre + " <b>película:</b> " + key.pelicula + "<br>");
}


//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({nombre: "El capitán Garfio", pelicula: "El capitán Garfio"});
/*
for (const key of disney) {
    document.write("<b>Nombre:</b> " + key.nombre + " <b>película:</b> " + key.pelicula + "<br>");
}
*/

//Meter al cocodrilo detrás del capitán, no olvides la película
disney.splice(1,0,{nombre: "Cocodrilo", pelicula: "El capitán Garfio"});
/*
for (const key of disney) {
    document.write("<b>Nombre:</b> " + key.nombre + " <b>película:</b> " + key.pelicula + "<br>");
}
*/

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
let personajesPelicula = disney.reduce((array, item)=>{(item.pelicula === "Peter Pan")? array.push(item):'';return array;},[]);

for (const key of personajesPelicula) {
    document.write("<br><b>Personaje</b> " + key.nombre + " <b>película:</b> " + key.pelicula + "<br>");
}


//Encontrar el índice de Campanilla.
let indiceCampanilla = disney.reduce((array, item, key)=>{(item.nombre === "Campanilla")? array.push(key):'';return array;},[]);

for (const key of indiceCampanilla) {
    document.write(`<br><b>Campanilla</b> se encuentra en el indice: <b>${key}</b><br>`);
}
//Buscar al cocodrilo.

let buscaCoco = disney.reduce((array, item)=>{(item.nombre === "Cocodrilo")? array.push(item.pelicula): '';return array;},[]);

for (const pelicula of buscaCoco) {
    document.write(`<br>El <b>Cocodrilo</b> se en encuentra en la pelicula <b>${pelicula}</b><br><br>`);
}


//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.

function shuffle(array){

    return array.sort(()=>Math.random() - 0.5)
}

shuffle(disney);

for (const key of disney) {
    document.write("<b>Nombre:</b> " + key.nombre + " <b>película:</b> " + key.pelicula + "<br>");
}
