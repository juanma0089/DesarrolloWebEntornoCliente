/* 003minimize.js/.html: Función min(a, b)
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
Por ejemplo:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

"use strict";

let a = prompt("Escriba el primer número a comparar");

let b = prompt("Escriba el segundo número a comparar");

min(a, b);

function min(a, b){

    (a < b)? alert(`${a} es menor que ${b}`) : alert(`${b} es menor que ${a}`)
}