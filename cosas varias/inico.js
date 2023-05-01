const contenedor = document.getElementById("container");

const animacionContenedor = contenedor.animate([
   { width: "100px", opacity: 1}, // 0%
   { width: "150px", opacity: 1}, // 25%
   { width: "200px", opacity: 0}, // 50%
   { width: "150px", opacity: 1}, // 75%
   { width: "100px", opacity: 1}, // 100%
], {duration: 2000});