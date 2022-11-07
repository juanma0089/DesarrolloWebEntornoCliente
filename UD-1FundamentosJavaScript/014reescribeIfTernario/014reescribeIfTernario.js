/*014reescribeIfTernario.js/.html: Reescriba esta condición if usando el operador 
ternario:
let result;
if (a + b < 4) {
  result = 'Baja la ropa sucia’;
} else {
  result = 'Sube los zapatos';
} */

let a = prompt("Introduzca un número");
let b = prompt("Introduzca otro número");

let result = (a + b < 4) ? 'Baja la ropa sucia' : 'Sube los zapatos';

alert(result);