// Dejar pasar solo a los meyores de edad
// La primer persona que entre despues de las 2 AM, no paga

let free = false;

const validarCliente = time => {

    let edad = prompt("Ingresa tu edad");
    if(edad >= 18){

        if(time >= 2 && time < 7 && free == false){
            alert(`Puedes pasar gratis, por que eres la primer 
                   persona en ingresar despues de las 2 AM`);
            free = true;
        } else{
            alert(`Son las ${time}:00Hs y puedes pasar, pero 
                   tienes que pagar la entrada.`);
        }

    } else{
        alert("Eres menor de edad, no puedes pasar");
    }

}

validarCliente(12);
validarCliente(2);
validarCliente(5);