/*006transformToCani.js/.html: Crear una función que reciba una cadena y la devuelva 
transformada en Cani. Por ejemplo, si le pasamos a la función la cadena "una cadena 
cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay 
que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir 
tres letras H al final.  */

"use strict";

let cadena = prompt("Escribe una frase para convertirla en modo cani");

let nuevaCadena = "";

let nuevoArray = [];

cadenaCani(cadena);

function cadenaCani(cadena) {
  let arrayCadena = [];

  arrayCadena = cadena.split("");

  for (let i = 0; i < arrayCadena.length; i++) {

    if (i % 2 == 0) {

      if (arrayCadena[i] == "c" || arrayCadena[i] == "C") {

        nuevoArray[i] = "K";

      }else{

        nuevoArray[i] = arrayCadena[i].toUpperCase();
      }


    } else {

      if (arrayCadena[i] == "c" || arrayCadena[i] == "C") {

        nuevoArray[i] = "k";

      }else{
        
        nuevoArray[i] = arrayCadena[i].toLowerCase();
      }
      
    }
  }

  nuevoArray.forEach((caracter) => {nuevaCadena += caracter;});

  alert(`${nuevaCadena}HHH`);
}
