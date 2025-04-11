// Escribir un programa que calcule el área y el perímetro de un cuadrado 

let ladoCuadrado = parseFloat(prompt("Ingresa en cm los lados del cuadrado."));

let area = ladoCuadrado * ladoCuadrado;
let perimetro = 4 * ladoCuadrado;

alert(`El area del cuadrado es: ${area} cm² y su perímetro es: ${perimetro} cm`);