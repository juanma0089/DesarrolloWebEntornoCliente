/* 016logicos.js/.html: ¿Cuál será el resultado de las siguientes operaciones?
alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );*/
"use strict";
/*
alert( null || 2 || undefined); //*resultado = 2  comparación booleana que devuelve el primer valor que sea true

alert( alert(1) || 2 || alert(3) ); //* resultado = 1 porque es un el alert 1 en sí no lo compara y 2 porque es el que realmente compara

alert( 1 && null && 2 );//*resultado = null devuelve de los comparados el valor que sea false

alert( alert(1) && alert(2) );//!resultado = 1 Y undefined
*/
alert( null || 2 && 3 || 4 );//*resultado 3  porque null es false y lo salta a la comparación de dos numeros(true) devuelve el siempre devuelve el segundo de los dos comparados