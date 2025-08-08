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

async function obternerProyectos() {
  const username = "Galking-droid"; // Nombre de usuario de GitHub
  const url = `https://api.github.com/users/${username}/repos`; // URL de la API de GitHub
  const proyectosContainer = document.getElementById("proyectos-container");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const repositorios = await response.json();
    proyectosContainer.innerHTML = '';

    repositorios.forEach(repo => {
        const proyectoDiv = document.createElement("div");
        proyectoDiv.classList.add("proyecto-item");

        const titulo = document.createElement("h3");
        titulo.textContent = repo.name;

        const descripcion = document.createElement("p");
        descripcion.textContent = repo.description || "Sin descripción";

        const enlace = document.createElement("a");
        enlace.href = repo.html_url;
        enlace.textContent = "Ver en GitHub";
        enlace.target = "_blank";

        proyectoDiv.appendChild(titulo);
        proyectoDiv.appendChild(descripcion);
        proyectoDiv.appendChild(enlace);
        proyectosContainer.appendChild(proyectoDiv);
    });


  } catch (error) {
    console.error("Hubo un error al obtener los repositorios:", error);
    proyectosContainer.textContent = "No se pudieron cargar los proyectos.";
  }
}

obternerProyectos();
