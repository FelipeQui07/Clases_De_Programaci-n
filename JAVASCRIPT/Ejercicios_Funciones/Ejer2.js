// Identificar si el numero es par o impar
const parImpar = (num) =>{
    if(num % 2 === 0){
        return "El numero es par";
    }else{
        return "El numero es impar"
    }
}

let num = parseInt(prompt("Ingresa un numero"));
alert(parImpar(num));