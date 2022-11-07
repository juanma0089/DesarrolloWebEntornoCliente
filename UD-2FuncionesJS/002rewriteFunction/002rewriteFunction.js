/*002rewriteFunction.js/.html: Reescribe la función utilizando '?' o '||'. La siguiente 
función devuelve true si el parámetro age es mayor que 18. De lo contrario, solicita 
una confirmación y devuelve su resultado.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}
Reescríbela para realizar lo mismo, pero sin if, en una sola línea.
Haz dos variantes de checkAge:
- Usando un operador de signo de interrogación ?
- Usando OR || */
"use strict";

let age = prompt("Introduzca su edad");

alert(checkAge(age));

function checkAge(age) {

    return (age > 18)? true : confirm('¿Tus padres te permitieron?');
}

function checkAge(age) {
    return (age > 18) || confirm('¿Tus padres te lo permitieron?');
  }