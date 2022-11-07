/*004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.
let name = "Peter Parker";
alert( `Hola ${1}` ); //\ ?
alert( `Hola ${"name"}` ); //\ ?
alert( `Hola ${name}` ); //\ ? */
"use strict";

let name = "Peter Parker";

alert(`Hola, ${1}`); //* Hola, 1  concatena Hola con el numero 1

alert( `Hola ${"name"}` ); //* Hola name son dos string 

alert( `Hola ${name}` ); //* hola Peter Parker string mas el valor de la variable name