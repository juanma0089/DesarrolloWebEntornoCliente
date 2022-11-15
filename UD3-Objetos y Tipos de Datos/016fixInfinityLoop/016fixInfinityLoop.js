/*016fixInfinityLoop.js/.html: Este bucle es infinito. Nunca termina, ¿por qué?
let i = 0;
while (i != 10) {
  i += 0.2;
} */

let i = 0;

while (i != 10) {

 alert (i += 0.2);

}
//la suma de 0.2 al ser decimal es imprecisa por lo cual no llega a ser 10 exacto y lo salta 