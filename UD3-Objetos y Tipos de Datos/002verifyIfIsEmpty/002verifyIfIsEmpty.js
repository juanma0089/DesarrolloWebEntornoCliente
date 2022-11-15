/*002verifyIfIsEmpty.js/.html: Escribe la función isEmpty(obj) que devuelva el valor true 
si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false*/

"use strict";

let schedule = {};
alert( isEmpty(schedule) ); 
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) );

function isEmpty(obj) {

    for (let i in obj) {

        if (obj[i] != null) {

            return false;

         }    
    }

    return true;
}