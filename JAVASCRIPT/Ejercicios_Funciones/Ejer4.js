// Cuantas letras especificas tiene una frase
const letra = (frase)=>{

    let cont = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "o" || frase[i] == "O"){
             cont++;
        }
    }
    return cont;
}

let frase = "Hola mundo como estas";

alert(`La frase tiene ${letra(frase)} 'o'`);