let frutas = ["Banana", "Manzana", "Pera"]; // Crear un arrays(Lista)
//document.write(frutas[0]); //Mostrar un dato prederteminado del array

// Arrays asociativos parecidos a los diccionarios en python
let pc = {
    nombre: "DaltoPC",
    procesador: "Intel core I7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

// Podemos utilizar etiquetas de HTML en JavaScript
let frase = `El nombre d mi pc es: <b>${nombre}</b> <br>
            el procesador es: <b>${procesador}</b> <br>
            la memoria ram es: <b>${ram}</b> <br>
            y el espacio es disco es: <b>${espacio}</b>`;

document.write(frase);

