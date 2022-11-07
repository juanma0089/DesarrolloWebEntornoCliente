/*022numPrimos.js/.html: Un número entero mayor que 1 es llamado primo si no puede 
ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n 
> 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.
Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.
Escribe el código que muestre números primos en el intervalo de 2 a n.
Para n = 10 el resultado será 2, 3, 5, 7.
PD. El código debería funcionar para cualquier n, no debe estar programado para 
valores fijos.
¿Puedes hacerlo con los 3 tipos de bucle? Demuéstralo. */
"user strict";

let n = prompt("Introduzca un número mayor a 2 hay primos entre ellos");

let arrayPrimos = [];
let primo = true;
let divisor;


//bucle for
/*
for (n ; n > 1; n--) {
    
    primo = true;
    
    for (divisor = (n-1); divisor >= 2; divisor--){
        if(n % divisor == 0){
            primo = false;
        }
    }
    if(primo){
    //* si es primo guardamos en un array para mostar
      arrayPrimos.push(n);
    }  
}

alert(arrayPrimos);
*/

//bucle do while
/*
do {
    let divisor = (n-1);
    primo = true;
    do {
        if(n % divisor == 0 && divisor > 1){
            primo = false;
        }
        divisor--;
    } while (divisor >= 2);
    if(primo){
        arrayPrimos.push(n);
    }  
    n--;

} while (n > 1);


alert(arrayPrimos);
*/

//blucle while

while(n > 1){

    let divisor = (n-1);
    primo = true;

    while(divisor >= 2){
        
        if(n % divisor == 0){

            primo = false;
        }
        divisor--;   
    }
    
    if(primo){
        arrayPrimos.push(n);
    } 
    n--;
}

alert(arrayPrimos);
