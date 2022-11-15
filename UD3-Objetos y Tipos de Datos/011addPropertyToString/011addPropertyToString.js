/*011addPropertyToString.js/.html: ¿Puedo agregar una propiedad a un string?: 
Considera el siguiente código:
let str = "Peter";
str.test = 5;
alert(str.test);
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué? */
"use strict";

let str = "Peter";
str.test = 5;
alert(str.test);

//¿funcionará? 
//*No (destacar que test no está correctamente definida)

//¿Qué mostrará? 
//*No muestra nada

//¿Por qué?
//**Los primitivos solo alvergan un único valor y en el caso de querer mostrar Peter5
//* el código deberia ir así 
/*
let str = "Peter";
let test = 5; //declarando correctamente la variable
alert(str + test);//concatenando ambas variables
*/
