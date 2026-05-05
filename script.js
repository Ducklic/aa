const boton = document.getElementById("btn");
const imagen = document.getElementById("sticker");

boton.addEventListener("click", function() {
  imagen.classList.remove("hidden");
});