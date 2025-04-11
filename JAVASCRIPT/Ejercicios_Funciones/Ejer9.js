// Ordenar una lista de numeros de menor a mayor
// const listaOrdenada = (numeros)=>{

//     return numeros.sort();
// }
// let numeros = [5, 8, 4, 1, 2, 3, 6, 7, 9];
// alert(`Lista normal: ${numeros}, lista ordenada: ${listaOrdenada(numeros)}`);

const listaOrdenada = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                // Intercambiamos los elementos
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
    return numeros;
};

let numeros = [5, 8, 4, 1, 4, 2, 3, 6, 7, 10, 9, 16, 14, 12, 13, 11];
alert(`Lista normal: ${numeros}, lista ordenada: ${listaOrdenada([...numeros])}`);