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

async function obtenerProyectos() {
  //const username = "Galking-droid"; // Nombre de usuario de GitHub
  const url = `http://localhost:3000/api/proyectos`; // URL de la API personalizada
  const proyectosContainer = document.getElementById("proyectos-container");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const proyectos = await response.json();
    proyectosContainer.innerHTML = "";

    proyectos.forEach((proyecto) => {
      const proyectoDiv = document.createElement("div");
      proyectoDiv.classList.add("proyecto-item");

      const titulo = document.createElement("h3");
      titulo.textContent = proyecto.nombre;

      const descripcion = document.createElement("p");
      descripcion.textContent = proyecto.descripcion || "Sin descripción";

      const enlace = document.createElement("a");
      enlace.href = proyecto.url;
      enlace.textContent = "Ver proyecto";
      enlace.target = "_blank";

      proyectoDiv.appendChild(titulo);
      proyectoDiv.appendChild(descripcion);
      proyectoDiv.appendChild(enlace);
      proyectosContainer.appendChild(proyectoDiv);
    });
  } catch (error) {
    console.error("Hubo un error al obtener los proyectos:", error);
    proyectosContainer.textContent = "No se pudieron cargar los proyectos.";
  }
}

obtenerProyectos();
