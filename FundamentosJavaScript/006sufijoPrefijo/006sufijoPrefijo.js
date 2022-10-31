/* 006sufijoPrefijo.js/.html: ¿Cuáles son los valores finales de todas las variables a, b, c y 
d después del código a continuación?
let a = 1, b = 1;
let c = ++a; //\ ?
let d = b++; //\ ?*/
"use strict";

let a = 1, b = 1;
let c = ++a;// c = 2      c toma el valor de (a + a) ya que los operadores esta puesto antes de la variable
let d = b++;//d = 1       d toma el valor de b antes de hacer la suma ya que los operadores estan posterior a la variable