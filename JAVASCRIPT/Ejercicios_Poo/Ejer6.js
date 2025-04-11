class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    get totalProductos(){
        return this.precio * this.cantidad
    }
}

const listaProductos = [
    new Producto("Camiseta", 15, 50),
    new Producto("pantalon", 20, 25),
    new Producto("medias", 5, 60)
]

let totalInventario = 0;
for(let producto of listaProductos){
    totalInventario += producto.totalProductos;
}

document.write(`El total de todo el inventario es: <b>$${totalInventario}</b> unidades monetarias`);