class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    get area(){
        return this.alto * this.ancho;
    }
    set dimensiones([newAlto, newAncho]){
        this.alto = newAlto;
        this.ancho = newAncho;
    }
}

const rectangulo = new Rectangulo(6, 2);

rectangulo.dimensiones = [7, 4]

document.write(`El área del rectángulo es: ${rectangulo.area} unidades cuadradas`)