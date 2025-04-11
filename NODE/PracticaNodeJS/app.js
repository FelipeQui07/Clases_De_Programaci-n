const fs = require('fs');

const poema = fs.readFileSync('PracticaNodeJS/poema.txt', 'utf-8');

// Hacer una copia del archivo
//  fs.writeFileSync('poema-copy.txt', poema);

const poemaModified = poema.replace(/node.js/ig, 'NodeJS');

fs.writeFileSync('poema-modified.txt', poemaModified);