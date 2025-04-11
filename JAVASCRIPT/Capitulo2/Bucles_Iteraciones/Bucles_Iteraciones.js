// let numero = 0;

// while(numero < 100){
//     numero++;
//     document.write( `${numero} <br>`); 
//     if(numero == 10){
//         break; //  break nos sirve para detener la ejecucion de código
//     }
// }

// do while nos sirve para que por lo menos el código se ejecute una vez mientras que con while no
// let numero = 5;

// do{
//     document.write(`${numero} <br>`);
//     numero++;
// }while(numero < 10);

//--------------------------------------------------------------------------------------------------

// Bucle for 1-definimos la variable 2-le damosla condicion 3-y lo aumentamos o restamos
// for(let i = 0; i < 6; i++){
//     if(i == 4){
//         continue; //Continue nos sirve para saltarnos la iteracion del valor especificado 
//     }
//     document.write(i + "<br>"); //R= 0-1-2-3-5
// }

// Bucle for in
// let animales = ["Gato", "Perro", "Conejo"];

// // Lo que hace in es devolvernos la pocision(indice) de los elementos
// for(let animal in animales){ // Se usa mas que todo para recorresr objetos y operar con esos objetos
//     document.write(animales[animal] + "<br>"); //R= 0, 1, 2
// }// Esta es una opcion para mostrar los elementos

// document.write("<br>");

// // Lo que hace of es mostrarnos directamente el elemento
// for(let animal of animales){
//     document.write(animal + "<br>");
// }

let array1 = ["Maria", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1];

for(let array in array2){
    if(array == 2){
        for(let array of array1){
            document.write(array + "<br>");
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}