/*008twoFunctionsOneObject.js/.html: ¿Es posible crear las funciones A y B para que se 
cumpla new A() == new B()?
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();
alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código. */

"use strict";

//Es posible pero hay que crear previamente un objeto y que las funciones retornen ese objeto 

let objeto = {};

function A() { 

    return objeto; 
}

function B() { 

    return objeto;
 }

let a = new A();
let b = new B();
alert( a == b ); 