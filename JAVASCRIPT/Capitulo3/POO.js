// Creamos la clase
class Animal{
    // Creamos el constructor con sus respectivos parametros los cuales va a tener nuestra clase
    constructor(especie, edad, color){
        /* this es el objeto que voy a crear y le podemos colocar cualquier nombre (this.raza)
lo que decimos con esto es que vamos a crear una propiedad llamada especie o raza o lo que quieras */
        this.especie = especie; //this es igual a objeto (objeto.propiedad/perro.color)
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} año(s)
                    y soy de color ${this.color}`;
    /* this solo se utiliza cuando creamos métodos o propiedades dentro de la clase cuando estamos 
    afuera del bloque el this ya no nos sirve */
    }
    // Creamos un método, Los métodos son las acciones que nosotros podemos hacer
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){ // Agregamos una nueva propiedad
        super(especie, edad, color); // super() nos sirve para heredar directamente de la clase Animal
        this.raza = null;
    }
    set setRaza(newName){ // SETTER
        this.raza = newName;
    }
    get getRaza(){ // GETTER
        return this.raza
    }
}

// Vamos a instanciar un objeto de la clase animal
const perro = new Perro("Canino", 5, "Marrón", "Doberman"); 
const gato = new Animal("Felino", 2, "Negro");
const pajaro = new Animal("Pajaro", 1, "Verde");

// Llamamos a los objetos de la clase por medio del método
perro.setRaza = "pincher"; // Modificamos el valor de raza
document.write(perro.getRaza); // Obtenermos el valor deraza

perro.ladrar();
gato.verInfo();
pajaro.verInfo();