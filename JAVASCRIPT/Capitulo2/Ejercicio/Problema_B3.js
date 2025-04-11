const suma = (num1, num2) => {
    return num1 + num2;
}
const resta = (num1, num2) => {
    return num1 - num2;
}
const division = (num1, num2) => {
    if (num2 === 0) {
        return "No se puede dividir entre cero";
    }
    return num1 / num2;
}
const multiplicacion = (num1, num2) => {
    return num1 * num2;
}

alert("¿Qué operación deseas hacer?");
let opcion = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicación");

// Convertir los valores ingresados en números
let numero1 = parseFloat(prompt("Ingresa el primer número"));
let numero2 = parseFloat(prompt("Ingresa el segundo número"));

switch(opcion) {
    case "1": // Suma
        let resultado = suma(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case "2": // Resta
        let resultado1 = resta(numero1, numero2);
        alert(`El resultado de la resta es: ${resultado1}`);
        break;
    case "3": // División
        let resultado2 = division(numero1, numero2);
        alert(`El resultado de la división es: ${resultado2}`);
        break;
    case "4": // Multiplicación
        let resultado3 = multiplicacion(numero1, numero2);
        alert(`El resultado de la multiplicación es: ${resultado3}`);
        break;
    default:
        alert("La opción no es válida.");
        break;
}