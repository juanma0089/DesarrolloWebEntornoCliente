/*034findLastDayOfMonth.js/.html: Escribe una función getLastDayOfMonth(year, 
month) que devuelva el último día del mes dado. A veces es 30, 31 o incluso 28/29 
para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto).*/

"use strict";

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month){

    let fecha = new Date(year, month + 1, 0); //*con el 0 indicamos el día anterior a la fecha que introduzcamos

    return fecha.getDate();

} 