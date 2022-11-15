/*036formatToRelative.js/.html: Cambia el formato a fecha relativa. Escribe una función 
formatDate(date) que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace 
n seg,".
De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es 
decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 
31.12.16 10:00.*/

"use strict";

let fecha = new Date(16, 11, 31, 10);

alert(formatDate(fecha));

function formatDate(date) {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();

    let comparatorMs = new Date() - date;
    let comparatorSec = Math.round(comparatorMs / 1000);
    let comparatorMin = comparatorSec / 60;
    let comparatorHour = comparatorMin / 60;
  

    year = year.toString().slice(-2);
    month = (month < 10)? "0" + month : month;
    day = (day < 10)? "0" + day : day;
    hour = (hour < 10)? "0" + hour : hour;
    min = (min < 10)? "0" + min : min;
  
    if (comparatorSec < 1) {

      return "ahora mismo";

    } else if (comparatorMin < 1) {
      return `hace ${comparatorSec} seg.`

    } else if (comparatorHour < 1) {

      return `hace ${comparatorMin} min.`

    } else {

      return `${day}.${month}.${year} ${hour}:${min}`
    }
  }