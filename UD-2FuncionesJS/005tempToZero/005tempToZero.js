/*005tempToZero.js/.html: Crear una función temporizador que reciba como parámetro 
los minutos y segundos de duración de éste, de modo, que cada segundo mostrará por 
consola el tiempo que le queda al temporizador hasta llegar a 0. La función recibirá dos 
parámetros, con los minutos y los segundos, pero en el caso que sólo le pasemos un 
parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. 
Por ejemplo:
temporizador(77); // le pasamos 77 segundos
temporizador(2,50); // le pasamos 2 minutos y 50 segundos */

"use strict";

let minutos = +prompt("Escriba los minutos del temporizador");
let segundos = +prompt("Escriba los segundos del temporizador");

if(minutos != 0){

    segundos+= minutos * 60;

    temporizador(segundos);

}else{

    temporizador(segundos);
}

function temporizador(seg){
        
     let tempo =  setInterval(() => {

            if (seg > 0) {
                console.log(seg);
                seg--;   
            }else{
                console.log("Fin del temporizador");
                clearInterval(tempo);
            }
        }, 1000);
    }  
