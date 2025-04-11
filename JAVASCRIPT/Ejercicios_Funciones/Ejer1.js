// Sumar dos numeros ingresados por el usuario
const suma = (num1, num2)=>{
    let resultado = num1 + num2;
    return resultado;
}

let num1 = parseInt(prompt("Ingresa el primer numero a sumar"));
let num2 = parseInt(prompt("Ingresa el segundo numero a sumar"));

alert(suma(num1, num2));