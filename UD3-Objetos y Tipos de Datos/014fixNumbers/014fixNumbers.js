/*014fixNumbers.js/.html: ¿Por qué 6.35.toFixed(1) == 6.3? Según la documentación 
Math.round y toFixed redondean al número más cercano: 0..4 hacia abajo mientras 
5..9 hacia arriba. Por ejemplo:  alert( 1.35.toFixed(1) ); // 1.4
En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
alert( 6.35.toFixed(1) ); // 6.3
¿Cómo redondear 6.35 de manera correcta? */

"use strict";

//¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
//*La fracción decimal 6.35 resulta en binario sin fin, con lo que se almacena con pérdidas de precisión
//*La manera de redondear correcta es pasar el número decimal a lo más un entero evitando así precisión

alert(Math.round(6.35 * 10) / 10);

//* (6.35*10)= 63.5 ya está más cercano a un número entero
//* Math.round lo redondea a 64 
//* al volverlo a dividir obtenemos 6.4 