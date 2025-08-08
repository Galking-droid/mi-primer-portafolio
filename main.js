let titulo = document.getElementById("titulo-principal");

let boton = document.getElementById("boton-color");

function cambiarColor() {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  titulo.style.color = color;
}

boton.addEventListener("click", cambiarColor);

titulo.textContent = "¡ Hola, bienvenido a mi portafolio !";
