/*006calculator.js/.html: Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
  // ... tu código ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

"use strict";

let calculator = {
    read(){
        /*con this hago referencia al objeto en el que nos econtramos y lo definimos(con lo que introduzca el usuario)*/
        this.a = +prompt("Escriba un número");
        this.b = +prompt("Escriba otro número");

    },
    sum(){
      
       return  this.a + this.b ;

    },
    mul(){

        return  this.a * this.b ;
    }
  }

  calculator.read();

  alert( calculator.sum() );

  alert( calculator.mul() );