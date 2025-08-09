async function obtenerProyectos() {
  const username = "Galking-droid";
  const proyectosDestacados = [
    "challenge-amigo-secreto-joseph-gama",
    "juego_numero_secreto",
    "mi-primer-portafolio",
  ];
  const url = `https://api.github.com/users/${username}/repos`;
  const proyectosContainer = document.getElementById("proyectos-container");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const todosLosProyectos = await response.json();
    const proyectosFiltrados = todosLosProyectos.filter((proyecto) =>
      proyectosDestacados.includes(proyecto.name)
    );

    proyectosContainer.innerHTML = "";

    // Aquí está el cambio: usa 'proyectosFiltrados'
    proyectosFiltrados.forEach((proyecto) => {
      const proyectoDiv = document.createElement("div");
      proyectoDiv.classList.add("proyecto-item");

      const titulo = document.createElement("h3");
      titulo.textContent = proyecto.name;

      const descripcion = document.createElement("p");
      descripcion.textContent = proyecto.description || "Sin descripción";

      const enlace = document.createElement("a");
      enlace.href = proyecto.html_url;
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
