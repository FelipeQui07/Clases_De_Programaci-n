let numero = parseInt(prompt("Ingresa un numero: "));
let resultado = 1;

for(let i = numero; i >= 1; i--){
    resultado *= i;
}
alert(`El resultado es: ${resultado}`);