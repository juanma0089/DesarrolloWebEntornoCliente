/*032showWeekDate.js/.html: Muestra en pantalla un día de la semana Escribe una 
función getWeekDay(date) para mostrar el día de la semana en formato corto: ‘MO’, 
‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // debería mostrar "TU"*/

"use strict";

let date = new Date(2012, 0, 3);// 3 Jan 2012

alert( getWeekDay(date) ); // debería mostrar "TU"

function getWeekDay(date){

    let weekDay = ["SU", "MO", "TU", "TH", "WE", "FR", "SA"];
    
    return weekDay[date.getDay()];

}