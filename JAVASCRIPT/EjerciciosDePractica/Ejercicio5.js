// Escribir un programa que calcule el valor medio de tres números 

alert("ingresa tres numero para saber el valor medio de los tres.");

let cont = 0;

for(let i = 0; i < 3; i++){
    let numero = parseFloat(prompt(`Ingresa el numero ${i + 1}`));
    cont += numero;
}
let resultado = cont / 3;

alert(`El valor medio de los tres numeros es: ${resultado}`);