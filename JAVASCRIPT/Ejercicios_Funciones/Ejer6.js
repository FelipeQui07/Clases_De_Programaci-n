// Contar cuantas vocales hay en una frase
const vocales = (frase)=>{

    let cont = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
           cont++;
        }
    }
    return cont;
}

let frase = prompt("Ingresa la frase que desea saber cuantas vocales tiene");
alert(vocales(frase));