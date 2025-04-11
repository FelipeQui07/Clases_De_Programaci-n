const { error } = require('console');
const fs = require('fs');

/*
// Crear un documento y agregar texto dentro de el 
s.writeFile('Data1.txt', 'Este es mi primera vez utilizando nodejs', (error)=>{
    if(error){
        console.log(`Error: ${error}`);
    }
})
*/

/*
fs.readFile('Data1.txt', (error, data)=>{
    if(!error){
        console.log(data);
    }else{
        console.log(`Error: ${error}`);
    }
})
*/

/*
// Mostrar el contenido del documento
fs.readFile('Data1.txt','utf-8', (error, data)=>{
    if(!error){
        console.log(data);
    }else{
        console.log(`Error: ${error}`);
    }
})
*/

/*
// Renombrar el documento 
fs.rename('DataCanal', 'DataCanal.txt', (error)=>{
    if(!error){
        console.log("¡Renombreado!");
    }else{
        console.log(`Error: ${error}`);
    }
})
*/

/*
// Agregar contenido al documento 
fs.appendFile('DataCanal.txt', '\nEstoy aprendiendo mucho sobre nodejs', (error)=>{
    if(!error){
        console.log("¡Contenido Agregado!");
    }else{
        console.log(`Error: ${error}`);
    }
})
*/

// fs.createReadStream('Datacanal.txt').pipe(fs.createWriteStream('dataCana_bu.txt'));

/*
// Para eliminar un archivo 
fs.unlink('DataCana_bu.txt', (error)=>{
    if(error){
        console.log(`Error: ${error}`);
    }
})
*/

/*
// Para ver todos los archivos que tenemos en el directorio
fs.readdir('./', (error, archivos)=>{
    archivos.forEach(archivo =>{
        console.log(archivo);
    });
    if(error){
        console.log(`Error: ${error}`);
    };
});
*/

