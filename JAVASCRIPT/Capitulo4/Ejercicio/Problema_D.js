class Calculadora{

    constructor(){

    }

    suma(num1, num2){
        return num1 + num2;
    }
    resta(num1, num2){
        return num1 - num2;
    }
    division(num1, num2){
        if (num2 === 0) {
            return "No se puede dividir entre cero";
        }
        return num1 / num2;
    }
    multiplicacion(num1, num2){
        return num1 * num2;
    }
    potenciar(num, exp){
        return num ** exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación deseas hacer?");
let opcion = prompt(`1: Suma, 2: Resta, 3: División, 4: Multiplicación, 5: Potenciación,
    6: Raíz cuadrada, 7: Raíz Cúbica`);

switch(opcion) {
    case "1": // Suma
        let numero1 = parseFloat(prompt("Ingresa el primer número"));
        let numero2 = parseFloat(prompt("Ingresa el segundo número"));
        let resultado = calculadora.suma(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case "2": // Resta
        let numero3 = parseFloat(prompt("Ingresa el primer número"));
        let numero4 = parseFloat(prompt("Ingresa el segundo número"));
        let resultado1 = calculadora.resta(numero3, numero4);
        alert(`El resultado de la resta es: ${resultado1}`);
        break;
    case "3": // División
        let numero5 = parseFloat(prompt("Ingresa el primer número"));
        let numero6 = parseFloat(prompt("Ingresa el segundo número"));
        let resultado2 = calculadora.division(numero5, numero6);
        alert(`El resultado de la división es: ${resultado2}`);
        break;
    case "4": // Multiplicación
        let numero7 = parseFloat(prompt("Ingresa el primer número"));
        let numero8 = parseFloat(prompt("Ingresa el segundo número"));
        let resultado3 = calculadora.multiplicacion(numero7, numero8);
        alert(`El resultado de la multiplicación es: ${resultado3}`);
        break;
        case "5": // Potenciación
        let numero = parseFloat(prompt("Ingresa el número a potenciar."));
        let exponente = parseFloat(prompt("Ingresa el Potenciador"));
        let resultado4 = calculadora.potenciar(numero, exponente);
        alert(`El resultado de la Potenciación es: ${resultado4}`);
        break;
        case "6": // Raíz Cuadrada
        let num = parseFloat(prompt("Ingresa número para saber la raíz cuadrada"));
        let resultado5 = calculadora.raizCuadrada(num);
        alert(`La raiz cuadrada de ${num} es: ${resultado5}`);
        break;
        case "7": // Raíz Cúbica
        let num2 = parseFloat(prompt("Ingresa número para saber la raíz cúbica"));
        let resultado6 = calculadora.raizCubica(num2);
        alert(`La raiz Cúbica de ${num2} es: ${resultado6}`);
        break;
    default:
        alert("La opción no es válida.");
        break;
}  