/*009otherCalculator.js/.html: Crear una función constructora Calculator que crea 
objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con 
los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

"use strict";

//Definimos las variables con "this"(al definirlas NO nos dá error) read, sum, mul que serán funciones dentro de la función constructora

function Calculator(){

    this.read = function(){

        this.a = +prompt("Escriba un número");
        
        this.b = +prompt("Escriba otro número");

    }

    this.sum = function(){

        return this.a + this.b;
    }

    this.mul = function(){

        return this.a * this.b
    }

}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );