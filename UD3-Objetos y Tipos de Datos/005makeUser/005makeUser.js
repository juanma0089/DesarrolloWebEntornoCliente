/*005makeUser.js/.html: Aquí la función makeUser devuelve un objeto. ¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado?*/

"use strict";

function makeUser() {

  return {

    name: "John",
    ref: this

  };
}

let user = makeUser();

console.log( user.ref.name );

alert( user.ref.name );

/*¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué? */

//es una propiedad sin definir


// ¿Cuál es el resultado?*/

//resultado es un error ya que intenta acceder a una propiedad sin valor;