let titulo = document.getElementById("titulo-principal");

let botonTitulo = document.getElementById("boton-color");

let habilidades = document.querySelector("ul");

let botonHabilidades = document.getElementById("boton-habilidades");

function cambiarColor() {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  titulo.style.color = color;
}

botonTitulo.addEventListener("click", cambiarColor);

function alternarHabilidades() {
  habilidades.classList.toggle("oculto");
}

botonHabilidades.addEventListener("click", alternarHabilidades);
