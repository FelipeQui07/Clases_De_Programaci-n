let frase = prompt("Ingresa una frase con espacios al inicio y al final");
let resultado = frase.trim();

console.log(`
    El texto ingresado fue: ${frase}|
    El texto sin espacios al inicio y al final: ${resultado}
    `)