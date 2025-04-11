class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return `Hola mucho gusto soy ${this.nombre}, tengo ${this.edad} años `
    }
}

const persona = new Persona("Felipe", 21);
document.write(persona.saludar());

class Estudiante extends Persona{
    constructor(nombre, edad, grado){
        super(nombre, edad);
        this.grado = grado;
    }
    saludoEstu(){
        return this.saludar() + `y estoy en ${this.grado} grado.`
    }
}

const estudiante = new Estudiante("Isaac", 8, 4)
document.write(estudiante.saludoEstu());