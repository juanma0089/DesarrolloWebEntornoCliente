/*030arrayToObjetct.js/.html: Crea un objeto a partir de un array Supongamos que 
recibimos un array de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los 
elementos del array como valores. Dicha función es realmente útil cuando trabajamos 
con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array 
con el mismo id.
Usa el método de array .reduce en la solución.*/

"use strict";

let personajes = [
    {id:1, nombre:"Frodo", pelicula:"Lord of the ring" },       
    {id:2, nombre:"Tony Stark", pelicula:"Iron Man 2" },
    {id:3, nombre:"Darth Vader", pelicula:"Star Wars" },
    {id:4, nombre:"Joker", pelicula:"The Dark Knight" }
];

function groupById(arr){

    return  arr.reduce((item, value)=>{ item[value.id] = value; return item;},{});
    //Creamos objeto mediante el id como indice retornamos el objeto con esa id y todos sus valores 
}
 let personajeID = groupById(personajes);

console.log(personajeID);
