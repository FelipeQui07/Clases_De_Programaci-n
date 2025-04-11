// Invertir una frase
const fraseInvertida = (frase) => {
    let i = frase.length - 1;
    let invertida = "";
    while( i >= 0){
        invertida += frase[i];
         i--;
    }
    return invertida;
}

let frase = prompt("Ingresa la frase que desees invertir");
alert(`La frase es: ${frase} y la frase invertida es: ${fraseInvertida(frase)}`);