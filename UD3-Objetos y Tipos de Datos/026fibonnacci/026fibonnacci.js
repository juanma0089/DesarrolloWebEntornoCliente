/*026fibonnacci.js/.html: Crear un array que contenga los 20 primeros números de 
Fibonacci.*/

"use strict";

const array = [1,1];

for (let i = 2; i < 20; i++) {
    array[i] = array[i - 1] + array[i - 2];
    
}

document.write(array);