/*003sumProperties.js/.html: Tenemos un objeto que almacena los salarios de nuestro 
equipo:
let salaries = {
  Harry: 100,
  Ron 160,
  Hermione: 130
}
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable 
sum. En el ejemplo de arriba nos debería dar 390. Si salaries está vacío entonces el 
resultado será 0.*/
"use strict";


let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
  }

  alert(sum(salaries));

function sum(obj){

    let suma = 0;

    for (let i in obj) {

        if (obj[i] != null) {

            suma += obj[i];

         }else{

            return suma ;
         }   
    }
    
    return suma;
}