/*017compruebaRangoInterno.js/.html: Escribe una condición “if” para comprobar que 
age(edad) está entre 18 y 99 inclusive. “Inclusive” significa que age puede llegar a ser 
uno de los extremos, 18 o 99. */

"use strict";

let age = prompt("Escriba su edad");

 (age >= 18 && age <= 99)? alert("Está en el rago de edad") : alert("Fuera de rango");
  
