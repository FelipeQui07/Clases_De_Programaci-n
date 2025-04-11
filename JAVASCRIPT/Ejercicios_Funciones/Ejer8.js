// Mostrar la palabra mas larga de la lista
const palLarga = (palabras)=>{

     let resultado = "";
    for(let pal of palabras){
            if(pal.length > resultado.length){
                resultado = pal;
            }
        }
        return resultado;
    }

let palabras = ["Hola", "Mundos", "Polindroma", "Cruel"];
alert(`La palabra mas larga es: ${palLarga(palabras)}`);