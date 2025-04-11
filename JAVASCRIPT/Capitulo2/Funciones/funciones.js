// function saludar(){
//     let respuesta = prompt("Hola Lucas como fue tu día.");
//     if(respuesta == "bien"){
//         alert("Que bien me alegro");
//     }
//     else{
//         alert("Es una pena");
//     }
// }
// saludar();

//--------------------------------------------------------------------------------------------------

// function sumar(num1, num2){
//         let res = num1 + num2;
//         return res;
// }

// let num1 = parseInt(prompt("Ingresa el primer numero a sumar"));
// let num2 = parseInt(prompt("Ingresa el segundo numero a sumar"));

// let resultado = sumar(num1, num2);

// document.write(resultado);

// function saludar(nombre){
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// saludar("Felipe");

//--------------------------------------------------------------------------------------------------

// Otra forma de crear una funcion es.
// const saludar = function(nombre){
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// saludar("Felipe");

//--------------------------------------------------------------------------------------------------

// Funciones Flecha Se remplaza function por => a la derecha 
// y si solo usamos un parametro no hace falta colocarle los parentesis
// Si solo tienes un argumento en la funcion se puede simplificar de esta forma
// y se retorna automaticamente
// const saludar = nombre=>{
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// let nombre = prompt("Ingresa tu nombre, por favor");

// saludar(nombre);