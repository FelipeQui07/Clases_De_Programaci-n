const numPrimo = (numero) => {
    if (numero <= 1) return "No es primo"; // Números <= 1 no son primos
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return "No es primo"; // Si es divisible, no es primo
    }
    return "Es primo"; // Si no se encontró divisor, es primo
};

let numero = parseInt(prompt("Ingresa un número")); // Solicitar número
alert(`El número ${numero}: ${numPrimo(numero)}`);