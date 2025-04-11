// Escribir un script que calcule el precio total de una compra 

let cont = 0;

alert("Ingresa el numero de lo que quieres comprar");

for(let i = 0; i < 2; i++){
    let productos = parseInt(prompt("1 Leche\n2 Lb-Arroz\n3 Salchichon"));

    switch(productos){
        case 1:{
            cont += 4500;
            break;
        } case 2:{
            cont += 2000;
            break;
        } case 3:{
            cont += 6000;
            break;
        } default:{
            alert("No esta este producto");
            break;
        }
    }
}

alert(`El precio total de la compra es: ${cont}`);

