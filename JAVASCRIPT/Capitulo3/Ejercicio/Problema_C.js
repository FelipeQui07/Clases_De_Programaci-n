// Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
class Celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.pantalla = rdp;
        this.camara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        }else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.camara}`);
    }
    tomarVideo(){
        alert(`Video grabado en: ${this.camara}`);
    }
    mobileInfo(){
        return`
        Color: <b> ${this.color} </b><br>
        Peso: <b> ${this.peso} </b><br>
        Tamaño: <b> ${this.pantalla} </b><br>
        Memoria Ram: <b>${this.ram} </b><br>
        Resolución de cámara: <b> ${this.camara} </b><br>
        `
    }
}

// ----------------------------------------------------------------------------------------------

class CelularAltaGama extends Celulares{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.camaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoGamaAlta(){
        return this.mobileInfo() + `Resolucion de camara trasera: <b>${this.camaraExtra}</b> <br><br>`
    }
}

// const celular1 = new Celulares("Blanco", "150g", "5'", "full hd", "3GB");
// const celular2 = new Celulares("Morado", "160g", "6'", "full hd", "4GB");
// const celular3 = new Celulares("Azul", "180g", "6.5'", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.tomarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

const celular1 = new CelularAltaGama("Rojo", "150g", "5.2", "4K", "4GB", "Full hd");
const celular2 = new CelularAltaGama("Morado", "160g", "5.4", "4K", "3GB", "hd");

document.write("<b>Celular Alta Gama Nº1</b> <br>" + celular1.infoGamaAlta());
document.write("<b>Celular Alta Gama Nº2</b> <br>"+ celular2.infoGamaAlta());

// ----------------------------------------------------------------------------------------------

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br><br>
        `
    }
}

const app1 = new App("16.000", "5 Estrellas", "900mb");
const app2 = new App("15.000", "2.7 Estrellas", "800mb");
const app3 = new App("20.000", "4.6 Estrellas", "500mb");
const app4 = new App("19.000", "4.9 Estrellas", "700mb");
const app5 = new App("50.000", "5 Estrellas", "900mb");
const app6 = new App("1.000.000", "5 Estrellas", "1Gb");
const app7 = new App("1.000", "3 Estrellas", "900mb");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write(`<b>App Nº1</b><br> ${app1.appInfo()}`);
document.write(`<b>App Nº2</b><br> ${app2.appInfo()}`);
document.write(`<b>App Nº3</b><br> ${app3.appInfo()}`);
document.write(`<b>App Nº4</b><br> ${app4.appInfo()}`);
document.write(`<b>App Nº5</b><br> ${app5.appInfo()}`);
document.write(`<b>App Nº6</b><br> ${app6.appInfo()}`);
document.write(`<b>App Nº7</b><br> ${app7.appInfo()}`);
