let oracion = "Hoy es un gran día para aprender a programar";

let buscar = prompt("Ingresa la palabra que quieres buscar.");

if(buscar){
     let resultado = oracion.toLowerCase().includes(buscar.toLowerCase());
     if(resultado){
        alert("La palabra si se encuentra en la oración");
     }else{
        alert("La palabra no se encuentra en la oración");
     }
}else{
    alert("No ingresaste ninguna palabra");
}