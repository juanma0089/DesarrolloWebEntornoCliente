/*018compruebaRangoExterno.js/.html: Escribe una condición if para comprobar que 
age NO está entre 18 y 99 inclusive. Crea dos variantes: la primera usando NOT, y la 
segunda sin usarlo.*/
"use strict";

"use strict";

let age = prompt("Escriba su edad");

 !(age >= 18 && age <= 99)? alert("Está en el rago de edad") : alert("Fuera de rango");

 (age < 18 || age > 99)? alert("Está en el rago de edad") : alert("Fuera de rango");