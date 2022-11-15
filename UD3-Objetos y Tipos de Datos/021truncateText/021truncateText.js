/**021truncateText.js/.html: Crea una función truncate(str, maxlength) que verifique la 
longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de 
puntos suspensivos "...", para hacer su longitud igual a maxlength. El resultado de la 
función debe ser la cadena truncada (si es necesario). Por ejemplo:
truncate("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me gustaría 
c..."
truncate("Hola a todos!", 20) = "Hola a todos!" */

"use strict";

let str = prompt("Introduzca una frase");
let maxlength = prompt("Escriba el tamaño máximo de caracteres que quiere mostrar")

alert(truncate(str, maxlength));

function truncate(str, maxlength){

return ( maxlength < str.length)? str.slice(0,maxlength -1) + "...": str;

};