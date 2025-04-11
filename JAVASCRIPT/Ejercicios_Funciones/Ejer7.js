// Identificar el  numero mayor de la lista
const numMayor = (numeros)=>{

    let mayor = 0;

    for(let num of numeros){
        mayor = Math.max(num);
    }
    
    return mayor
}

let numeros = [1, 5, 9, 8, 65, 84 ,79, 95, 125];
alert(`El numero mayor de la lista es: ${numMayor(numeros)}`);