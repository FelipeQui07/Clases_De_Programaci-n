// let cadena = "Cadena de prueba";
// let cadena2 = " Cadena 2";
// let resultado = cadena.concat(cadena2); R= Cadena de prueba Cadena 2

// let cadena = "Cadena de prueba";
// let cadena2 = "Cadena ";
// let resultado = cadena.startsWith(cadena2); // incuentra la cadena solo primer posicion
// document.write(resultado); R= true

// let cadena = "Cadena de prueba";
// let cadena2 = "prueba";
// let resultado = cadena.endsWith(cadena2); // incuentra la cadena solo ultima posicion
// document.write(resultado); R= true

// let cadena = "Sigo a dalto en instagram";
// let cadena2 = "instagram";
// let resultado = cadena.includes(cadena2); // incuentra la cadena desde cuelquier posicion
// document.write(resultado); R= true

// let cadena = "pedro es un tarado inmaduro";
// let cadena2 = "";
// let resultado = cadena.indexOf("tarado"); // nos devuelve el indecie desde donde comienza tarado - 12
// document.write(resultado); R= 12

// let cadena = "pedro es un tarado tarado tarado tarado tarado";
// let cadena2 = "";
// let resultado = cadena.lastIndexOf("tarado"); // nos devuelve el indecie de la ultima coincidencia de la cadena - 40
// for(let i = resultado; i <= cadena.length - 1; i++ ){
//     cadena2 += cadena[i]
// }
// document.write(cadena2); R= tarado

// let cadena = "abc";
// let cadena2 = "";
// let resultado = cadena.padStart(10,"1234"); 
// primero colocamos la cantidad de caracteres que debe de quedar
// de segundo colocamos con que queremos rellenar la cadena y no los rellena la cantidad 
// de veces para que quede de los caracteres 
// indicados con los carateres que ya habian.
// document.write(resultado); R=1234123abc

// let cadena = "abc";
// let cadena2 = " Cadena 2";
// let resultado = cadena.padEnd(10, "1234");
// document.write(resultado) // R=abc1234123 Lo mismo que padStart solo que al final

// let cadena = "Cadena de prueba 2 ";
// let cadena2 = "";
// let resultado = cadena.repeat(2);
// document.write(resultado); // R= Cadena de prueba Cadena de prueba 

// let cadena = "Hola como estas";
// let resultado = cadena.split(" ");
// Lo que hace es: cada  encuentra un espacio separa los valores y los convierte en arrays
// document.write(resultado);

// let cadena = "ABCDEFG";
// let resultado = cadena.substring(0, 4);
// El primer valor es donde comienza el indice y el segundo valor es donde termina
// El indice que empieza esta incluido pero el que termina no esta incluido
// document.write(resultado); // R= ABCD(0, 1, 2, 3)

// let cadena = "Cadena de prueba 2 ";
// let resultado = cadena.toLowerCase();
// document.write(resultado); // R= cadena de prueba 2

// let cadena = "Cadena de prueba 2 ";
// let resultado = cadena.toUpperCase();
// document.write(resultado); // CADENA DE PRUEBA 2

// let cadena = 50;
// let resultado = cadena.toString(); // para convertir a una cadena de texto
// document.write(2 + resultado);

// let cadena = "   pedro   ";
// let resultado = cadena.trim();
// document.write(resultado); // Elimina los espacios del principio y final

// let cadena = "   pedro   ";
// let resultado = cadena.trimEnd();
// document.write(resultado); // Elimina solo los espacios del final

let cadena = "   pedro   ";
let resultado = cadena.trimStart();
document.write(resultado); // Elimina solo los espacios del inicio 