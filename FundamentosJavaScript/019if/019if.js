/*019if.js/.html: ¿Cuáles de estos alerts va a ejecutarse? ¿Cuáles serán los resultados de 
las expresiones dentro de if(...)?
if (-1 || 0) alert( "primero" );
if (-1 && 0) alert( "segundo" );
if (null || -1 && 1) alert( "tercero" );*/
"use strict";
/*
if (-1 || 0) alert( "primero" ); //*muestra el alert, se ejecuta al entrar mediante el -1 contandolo como true

if (-1 && 0) alert( "segundo" ); //* No muestra nada al no ser ambas como verdaderas 
*/

if (null || -1 && 1) alert( "tercero" );//* muestra en pantalla el alert, obvia el null al ser falso y al comparar -1 y 1 que son verdaderos entra en el bucle