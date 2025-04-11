// parrafo = document.getElementById("parrafo");
// document.write(parrafo);

// parrafo = document.getElementsByTagName("p");
// document.write(parrafo);

// parrafo = document.querySelector("#rancio"); // # para llamar una ID en css y . para llamr un clase en css
// document.write(parrafo[5]);

// parrafo = document.querySelectorAll("#rancio"); // # para llamar una ID en css y . para llamr un clase en css
// document.write(parrafo[5]);

// const parrafo = document.querySelector(".edad");
// parrafo.setAttribute("type", "date");
// parrafo.setAttribute("type", "number");
// parrafo.removeAttribute("type");

// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contenteditable", "true"); // false o true
// titulo.setAttribute("dir", "rtl"); // rtl = right to left, ltr = left to right
// titulo.removeAttribute("hidden"); // hidden para ocultar un elemento
// titulo.setAttribute("tabindex", "1");
// titulo.setAttribute("title", "Titulo normal");

//--------------------------------------------------------------------------------------

// const input = document.querySelector(".input-normal");

// input.className;
// input.value = 123;
// input.type = "range";
// input.accept = "image/png"; Type="file"
// input.minLength = 4;
// input.placeholder = "Oelo que paso";
// input.required = " "; // El campo debe llenarse obligatoriamente

//--------------------------------------------------------------------------------------

// const titulo = document.querySelector(".titulo");

// titulo.style.padding = "30px";
// titulo.style.backgroundColor = "#48e";

//--------------------------------------------------------------------------------------

// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande");
// titulo.classList.remove("grande");
// titulo.classList.item(1);
// titulo.classList.contains("grande");
// titulo.classList.replace("grande", "pequeño");
// titulo.classList.toggle("grande");

//--------------------------------------------------------------------------------------

// const titulo = document.querySelector(".titulo");

// const resultado = titulo.textContent;
// const resultado1 = titulo.innerHTML;
// const resultado2 = titulo.outerHTML;

// alert(resultado);
// alert(resultado1);
// alert(resultado2);

//--------------------------------------------------------------------------------------

// const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for(let i = 0; i < 20; i++){
//     const item = document.createElement("LI"); // los elementos siempre deben de ir en mayúscula
//     item.textContent = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);

// console.log(contenedor);

//--------------------------------------------------------------------------------------

// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstChild; // no se puede dejar espacios en las etiquetas
// const primerHijo = contenedor.lastChild; // no se puede dejar espacios en las etiquetas
// const primerHijo = contenedor.firstElementChild; // se pueden dejar espacios entre etiquetas HTML
// const primerHijo = contenedor.lastElementChild; // se pueden dejar espacios entre etiquetas HTML

// const hijos = contenedor.childNodes; // es lo mismo que firstChild no podemos dejar espacios
// const hijos = contenedor.children; // es lo mismo qe firtsElementChild podemos dejar espacios
// console.log(hijos);

//--------------------------------------------------------------------------------------

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// const h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo);
// contenedor.removeChild(h2_antiguo);

// let respuesta = contenedor.hasChildNodes();

// if(respuesta){
//     document.write("EL elemento tiene hijos.");
// }else{
//     document.write("El elemento no tiene hijos");
// }

// console.log(h2_antiguo.parentElement); // Nos dice cual es padre de la etiqueta 

// console.log(h2_antiguo.previousElementSibling); // Nos sirve para saber que etiquetas hermanas hay antes

//--------------------------------------------------------------------------------------

const div = document.querySelector(".div");

console.log(div.closest(".div"));