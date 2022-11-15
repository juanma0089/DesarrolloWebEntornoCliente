/*023modifyThor.js/.html: Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: 
let thor = "Thor es el hijo de Odín";
// Largo de la cadena
//Encontrar la letra o
//Encontrar el carácter que ocupa la posición 3
//¿Qué carácter ocupa la posición 1?
//Trocea la cadena usando los espacios en blanco
//Reemplaza Thor por Loki
//Recorta la cadena para que devuelva la palabra Odín
//¿Puedes encontrar la letra a? Demuéstralo
//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)*/

let thor = "Thor es el hijo de Odín";

// Largo de la cadena
alert(thor.length);//* 23

//Encontrar la letra o


let subStr = thor.toLowerCase().split('');

let resultado = subStr.reduce((array,valor,index)=>{(valor === "o") ? array.push(" " + valor + ` se encuentra en la posición ${index}`) : ""; return array;}, []);

alert(resultado);

//Encontrar el carácter que ocupa la posición 3
alert(thor[3]);//* r

//¿Qué carácter ocupa la posición 1?
alert(thor.at(1));//*  h

//Trocea la cadena usando los espacios en blanco
alert(thor.split(' '));

//Reemplaza Thor por Loki
alert(thor.replace("Thor", "Loki"));

//Recorta la cadena para que devuelva la palabra Odín
let pos = thor.lastIndexOf("Odín")

//*busco en que posición esta Odín
 
alert(thor.slice(pos));//*devuelvo el string desde la posición encontrada

//¿Puedes encontrar la letra a? Demuéstralo
alert(thor.includes("a")? "se ha encontrado la letra a" : "No se encuentra la letra a");

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

alert(thor.at(0).toLowerCase() + thor.substring(1, 11) + thor.slice(11).toLocaleUpperCase())