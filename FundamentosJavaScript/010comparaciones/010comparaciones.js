/*010comparaciones.js/.html: ¿Cuál será el resultado de las siguientes expresiones? 
5 > 4
"apple" > "microsoft"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n" */
"use strict";

5 > 4;// resultado = true ya que 5 es mayor que cuatro
"apple" > "microsoft";//resultado = apple ya que compara el primer caracter de cada string y a es mayor alfabeticamente que m
"2" > "12";//resultado = 2 ya que compara como caracter 2 frente a 1 
alert(undefined == null);//se convierten a números 
undefined === null;
null == "\n0\n";
null === +"\n0\n";