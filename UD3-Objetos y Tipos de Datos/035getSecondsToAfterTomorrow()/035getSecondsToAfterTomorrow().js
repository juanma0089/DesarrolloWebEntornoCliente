/*035getSecondsToAfterTomorrow():  ¿Cuantos segundos faltan para el día de después 
de mañana? Crea una función getSecondsToAfterTomorrow() que devuelva la cantidad 
de segundos que faltan para el día después de mañana.
Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToAfterTomorrow() == 3600 + todos los segundo de un día
P.D.: La función debe poder funcionar para cualquier día, sin valores fijos en el código”.*/

"use strict";

alert(getSecondsToAfterTomorrow());

function getSecondsToAfterTomorrow(){
  
    let hoy = new Date();
    let maniana  = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + 1); //*con el +1 sumamos un día al día de hoy

    // comparamos el dia de hoy con mañana obteniendo los milisegundos de diferencia
    let comparator = maniana - hoy;

    return Math.round( comparator/ 1000); // pasamos los ms a segundos y redondeamos
} 