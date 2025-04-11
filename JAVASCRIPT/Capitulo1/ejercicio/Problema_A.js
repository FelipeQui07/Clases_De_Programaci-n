let dineroRoberto = prompt("Ingresa la cantidad de dinero que tiene Roberto");
let dineroPedro = prompt("Ingresa la cantidad de dinero que tiene Pedro");
let dineroCofla = prompt("Ingresa la cantidad de dinero que tiene Cofla");

dineroCofla = parseInt(dineroCofla);

// Precios de los helados
// palitoHeladoAgua = 0.6;
// palitoHeladoCrema = 1;
// bombonHeladoHeladix = 1.6;
// bombonHeladoHeladovich = 1.7;
// bombonHeladoHelardo = 1.8;
// potecitoHeladoConfites = 2.9;
// poteUnCuartoKg = 2.9;

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto Te puedes comprar el helado de agua");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto Te puedes comprar el helado de crema");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto Te puedes comprar el helado de bombóm heladix");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto Te puedes comprar el helado de bombóm heladovich");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto Te puedes comprar el helado de bombóm helardo");
}
else if(dineroRoberto >= 2.9){
    alert("Cofla Te puedes comprar el helado de potecito confites o un pote de 1/4 KG");
}
else{
    alert("Roberto no te alcanza para ningun helado")
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro Te puedes comprar el helado de agua");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro Te puedes comprar el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro Te puedes comprar el helado de bombóm heladix");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro Te puedes comprar el helado de bombóm heladovich");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro Te puedes comprar el helado de bombóm helardo");
}
else if(dineroPedro >= 2.9){
    alert("Cofla Te puedes comprar el helado de potecito confites o un pote de 1/4 KG");
}
else{
    alert("Pedro no te alcanza para ningun helado")
}

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla Te puedes comprar el helado de agua");
    alert("Te sobran " + (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla Te puedes comprar el helado de crema");
    alert("Te sobran " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla Te puedes comprar el helado de bombóm heladix");
    alert("Te sobran " + (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla Te puedes comprar el helado de bombóm heladovich");
    alert("Te sobran " + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla Te puedes comprar el helado de bombóm helardo");
    alert("Te sobran " + (dineroCofla - 1.8));
}
else if(dineroCofla >= 2.9){
    alert("Cofla Te puedes comprar el helado de potecito confites o un pote de 1/4 KG");
    alert("Te sobran " + (dineroCofla - 2.9));
}
else{
    alert("Cofla no te alcanza para ningun helado")
}