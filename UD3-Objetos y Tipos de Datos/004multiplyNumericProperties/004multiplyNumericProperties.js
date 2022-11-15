/*004multiplyNumericProperties.html/.js: Crea una función multiplyNumeric(obj) que 
multiplique todas las propiedades numéricas de obj por 2. Por ejemplo:
// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};
multiplyNumeric(menu);

// Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú"
};
Nota que multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su 
lugar.
P.D. Usa typeof para verificar si hay un número aquí. */

"use strict";

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

multiplyNumeric(menu);

alert(Object.values(menu));

function multiplyNumeric(obj){

    for (let i in obj) {

        if (typeof obj[i] === 'number') {

            obj[i] *= 2;
        }
    }
}

