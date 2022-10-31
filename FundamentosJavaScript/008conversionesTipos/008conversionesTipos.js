/*008conversionesTipos.js/.html: ¿Cuáles son los resultados de estas expresiones?
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2 */
/*
"use strict";

alert("" + 1 + 0); // resultado = 10 el primer valor es string los números pasan a string y con el operador + los concatena

alert("" - 1 + 0);// resultado = -1 convierte a string pero no concatena ya que lo primero q encuentra es con - y no sigue adelante

alert(true + false);//resultado = 1 devuelve el valor de true 

alert(6 / "3");//resultado = 2 raliza la división ya que el primero es un número 

alert("2" * "3");//resultado = 6 realiza la multiplicación si el primero es string y el 2 también

alert(4 + 5 + "px");//resultado = 9px suma los dos primeros al ser números y concatena con el string

alert("$" + 4 + 5);//resultado = $45 concatena los 3 valores ya que ahora son todos string

alert("4" - 2);//resultado = 2 realiza la operación no lleva un + que lo que haría que lo concatenaría

alert("4px" - 2);//resultado = NaN no es posible realizar la operación ya que el primer string lleva px y no solo un número

alert("  -9  " + 5);//resultado = -95 primero es string el segundo al llevar + lo concatena como string

alert("  -9  " - 5);//resultado = -14 lo toma como número ambos ya que el operador es -

alert(null + 1);//resultado = 1  null lo reconoce como 0 lo cual hace la suma

alert(undefined + 1);//resultado = NaN el primer valor no es un número asi que no puede realizar la operación

alert(" \t \n" - 2);//resultado = -2 lo que hay entre comillas es una tabulación y un alto de línea por lo cual el string está vacío
*/