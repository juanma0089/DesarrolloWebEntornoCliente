/*001requiredElse.js/.html: ¿Es "else" requerido?
La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, 
solicita una confirmación y devuelve su resultado:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}
¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
el comportamiento de estas dos variantes?*/
"use strict";

let age = prompt("Introduzca su edad");

alert(checkAge(age));


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('¿Tus padres te permitieron?');
    }
  }


  function checkAge(age) {
    if (age > 18) {
      return true;
    }
      return confirm('¿Tus padres te permitieron?');
    }
  //*Funciona igual esté o no el else. Ejecuta el if y si no lo cumple salta al return 