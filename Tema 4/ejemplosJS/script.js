//document.write("Hola mundo!");
var parrafo = document.getElementById("texto");
parrafo.innerHTML = "Texto desde JavaScript";
parrafo.style.color = "red";

var contenedor = document.getElementById("contenedor");
var nuevo = document.createElement("p");
var texto = document.createTextNode("Texto desde JavaScript");

contenedor.appendChild(nuevo);
nuevo.appendChild(texto);

//llama a la función al pulsar en el botón
function pulsar(){
    alert("Hola, bienvenido a una página dinámica.");
    var boton1 = document.getElementById("button");
    boton1.style.backgroundColor = "red";
}
    
