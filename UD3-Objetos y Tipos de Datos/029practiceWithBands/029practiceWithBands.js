/*029practiceWithBands.js/.html: Ejecuta sobre el siguiente array las operaciones 
pedidas:
 var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];
//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
//¿En qué posición del array se encuenta “Cold Play”?*/

"use strict";

var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.

let filtro = grupos.reduce((array, item) => {(item.genero === "Heavy Metal")? array.push(`Nombre: <b>${item.nombre}</b> Género <b>${item.genero}</b><br>`):"";return array},[]);

document.write(filtro);

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.

let busquedaName = grupos.find(item => item.nombre === "Cold Play");

document.write(`El grupo <b>${busquedaName.nombre}</b> es del género: <b>${busquedaName.genero}</b>`);

//¿En qué posición del array se encuenta “Cold Play”?

let busquedaIndex = grupos.findIndex(item => item.nombre === "Cold Play");

document.write(`<br>El grupo <b>${busquedaName.nombre}</b> se encuentra en la posición <b>${busquedaIndex}</b> del array de grupos`);