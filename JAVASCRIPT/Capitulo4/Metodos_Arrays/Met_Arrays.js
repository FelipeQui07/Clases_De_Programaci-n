// let nombres = ["Juan", "Carlos", "Daniel"];
// let resultado = nombres.pop();
// document.write(resultado); // Daniel

// let nombres = ["Juan", "Carlos", "Daniel"];
// let resultado = nombres.shift();
// document.write(resultado); // Juan

// let nombres = ["Juan", "Carlos", "Daniel"];
// nombres.push("Jorge", "Diego", "Sergio");
// document.write(nombres);

// let numeros = [1, 2, 3, 4, 5];
// numeros.reverse();
// document.write(numeros);

// let numeros = [3, 4, 5];
// numeros.unshift(0, 1, 2);
// document.write(numeros);

// let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// palabras.sort();
// document.write(palabras);

// let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// palabras.splice(-1, 0, "Roberto", "Gustavo", "Maximo"); // en la primer posición se coloca desde donde se va a empezar y el segundo hasta donde se va a eliminar y lo que coloquemos despues se va a comenzar agregar, es como si estuvieramos resplazando los elementos que eliminamos. Si no queremos que elimine nada colocamos cero, y el primer valor es de donde va a empezar, si queremos que se agregen al principio colocamos cero o -1 si queremos que se agreguen antes del ultimo.
// document.write(palabras);

// let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// let resultado = palabras.join(" - "); // Cambia el array a una cadena de texto 
// document.write(resultado); // Abecedario - Manzana - Pedro - Dedo - Bobo

// let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// let resultado = palabras.slice(0, 2); // es casi lo mismo que el substring si queremos que nos muestre todos los elementos solo colocamos el cero
// document.write(resultado); // Abecedario, Manzana

let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
let resultado = palabras.filter( palabras => palabras.length > 5); // filter recibe como parametro una función.
document.write(resultado);

// let palabras = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// palabras.forEach( palabras => document.write(palabras + "<br>")); // Es practicamente lo mismo que filter
// solo que filter es mas completo y nos premite crear un nuevo array