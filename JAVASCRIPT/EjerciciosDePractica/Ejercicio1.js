// Escribir una función que reciba un número y retorne "fizz" si es múltiplo de 3, "buzz" si es múltiplo de 5, o "fizzbuzz" si es múltiplo de ambos
let numero = parseInt(prompt("Ingresa un numero:"));

if(numero % 3 === 0 && numero % 5 === 0){
    console.log('fizzbuzz');
}else if(numero % 3 === 0){
    console.log("fizz");
}else if(numero % 5 === 0){
    console.log('buzz');
}else{
    console.log(`El numero ${numero} no es múltiplo de 3 o de 5`);
}