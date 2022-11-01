/*010comparaciones.js/.html: ¿Cuál será el resultado de las siguientes expresiones? 
5 > 4
"apple" > "microsoft"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n" */
"use strict";

5 > 4;//* resultado = true ya que 5 es mayor que cuatro

"apple" > "microsoft";//* resultado = apple ya que compara el primer caracter de cada string y a es mayor alfabeticamente que m

"2" > "12";//* resultado = 2 ya que compara como caracter 2 frente a 1 

undefined == null;//* resultado = true pasan a ser ambos 0  por lo cual son iguales

undefined === null;//* resultado = false vuelve a compara los dos pero no seon del mismo tipo 

null == "\n0\n";//* resultado = false compara null que es false con un string que contiene 0 que es true

null === +"\n0\n";//* resultado = false son tipos distintos