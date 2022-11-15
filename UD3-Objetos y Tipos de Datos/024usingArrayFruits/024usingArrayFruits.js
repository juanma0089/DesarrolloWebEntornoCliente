/*024usingArrayFruits.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:
var fruits = ["Banana", "Manzana", "Fresa"];
//Añadimos cereza al principio
//Añadimos melocotón al final
//Mostrar el array elemento a elemento con for clásico
//Eliminamos el primer elemento.
//Eliminamos el último elemento.
//Mostrar cada elemento con for of o for in, lo que considere más adecuado.*/
"use strict";

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("cereza");
alert(fruits);

//Añadimos melocotón al final
fruits.push("melocotón")
alert(fruits);

//Mostrar el array elemento a elemento con for clásico
for (let index = 0; index < fruits.length; index++) {
    alert(fruits[index]);
}

//Eliminamos el primer elemento.
fruits.shift()
alert(fruits);

//Eliminamos el último elemento.
fruits.pop()
alert(fruits);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.

for (let value of fruits) {
    alert(value)
};