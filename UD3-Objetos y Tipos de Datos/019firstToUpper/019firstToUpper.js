/*019firstToUpper.js/.html: Escribe una función ucFirst(str) que devuelva el string str con 
el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John"; */

"use strict";

let str = prompt("Escribe una palabra toda en minúscula y te la devuelvo con la primera en mayúscula");

alert(ucFirst(str));

function ucFirst(str) {

    return str[0].toUpperCase() + str.slice(1);

}

