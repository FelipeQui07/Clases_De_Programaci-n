class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacerSonido(){ 
            return `Esta animal hace un sonido <br>`;
        }
}

class Perro extends Animal{
    hacerSonido(){
            return `El ${this.nombre} hace <b>¡WAW!</b><br>`;
    }
}

class Gato extends Animal{
    hacerSonido(){
            return `El ${this.nombre} hace <b>¡MIAU!</b><br>`;
    }
}

const mascota1 = new Animal("Zorro");
const mascota2 = new Gato("Gato");
const mascota3 = new Perro("Perro");

document.write(mascota1.hacerSonido());
document.write(mascota2.hacerSonido());
document.write(mascota3.hacerSonido());