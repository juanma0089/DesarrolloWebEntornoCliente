/*004power.js/.html: Función pow(x,n): Escriba la función pow(x,n) que devuelva x como 
potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el 
resultado.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).
Nota: La función solo debe admitir valores naturales de n: enteros desde 1.*/

"use strict";

let x = prompt("Escriba un número");

let n = prompt("Escriba el exponente");

pow(x, n);

function pow(x, n){

    if (n < 1) {
        alert(`Para calcular la potencia de ${x}, ${n} no se puede utilizar, use un número mayor a 0`);
      } else {
        alert(Math.pow( x, n ));
      }
}

