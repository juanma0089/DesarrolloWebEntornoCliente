/*012testCuriosity.js/.html: Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué? */
"use strict";

alert( 9999999999999999 );

//¿Qué está pasando?
//*Devuelve 10000000000000000
//¿Por qué?
//*Los números de punto flotante son imprecisos, si son iguales a 2^53 o superiores son demasiado grandes para representarlos de forma precisa como enteros.