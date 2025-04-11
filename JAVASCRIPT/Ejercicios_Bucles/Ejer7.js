let palabra = "Hola";
let invertida = "";

for(let i = palabra.length - 1; i >= 0; i--){
    invertida += palabra[i];
}
console.log(`La palabra normal es: ${palabra} y la palabra invertida es: ${invertida}`);