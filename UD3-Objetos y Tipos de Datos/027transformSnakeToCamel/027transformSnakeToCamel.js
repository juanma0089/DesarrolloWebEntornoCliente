/*027transformSnakeToCamel.js/.html: Escribe la función camelize(str) que convierta 
palabras separadas por _ como “mi_cadena_corta” en palabras con mayúscula 
“miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra después de _ 
comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo 
(join).*/

"use strict";

function camelize(str){

    let array = str.split("");
    let sustituir;

    for (const key of array) {
        
        if(key === "_"){

            sustituir = array.indexOf("_"); //a la variable sustituir le damos el valor de la (_)

            array[sustituir + 1] = array[sustituir + 1].toUpperCase(); //indicamos que el siguiente caracter a (_) sea mayúscula
            array[sustituir] = "";//sustituye (_) 
        }
    }

return array.join("");// join("") nos concatena todos los caracteres

}

document.write(camelize("background_color"));//* 'backgroundColor'

document.write(camelize("<br>list_style_image"));//*  'listStyleImage'

document.write(camelize("<br>_webkit_transition"));//*  'WebkitTransition'

