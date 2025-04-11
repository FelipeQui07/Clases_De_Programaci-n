// Para iniciar un proyecto se utiliza en la terminal npm init en el archivo en el que lo vas a iniciar
// se debe ejecutar de esta manera: npm run build o dev el unico que lleva run es start.
// console.log("Hola mundo desde NodeJS en el curso de SergiCode");

// ES6
import {getAuthor, getTitle} from './fucntions.js';
import {curso} from './objects.js';

// Como se usaba legacy
// const {getAuthor, getTitle} = require('./fucntions');
// const {curso} = require('./objects');

console.log(getTitle());
console.log(getAuthor("Felipe"));
console.log(curso);