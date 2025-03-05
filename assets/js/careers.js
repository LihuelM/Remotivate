document.addEventListener("DOMContentLoaded", function () {
    let selectedTags = new Set();

    const tagsContainer = document.querySelector(".tags");
    const careersContainer = document.querySelector(".careers");

    function renderTags() {
        tagsContainer.innerHTML = "";
        const allTags = new Set(careersData.flatMap(career => career.tags));

        allTags.forEach(tag => {
            const tagBtn = document.createElement("button");
            tagBtn.textContent = tag;
            tagBtn.addEventListener("click", () => toggleTag(tag, tagBtn));
            tagsContainer.appendChild(tagBtn);
        });

        // Agregar botón "Limpiar selección" con icono
        const clearBtn = document.createElement("button");
        clearBtn.classList.add("clear-button"); // Clase para estilos CSS
        clearBtn.textContent = "Limpiar selección"; // Agregar texto al botón
        clearBtn.addEventListener("click", clearSelection);

        // Crear el icono de basurero
        const icon = document.createElement("img");
        icon.src = "../images/trash.svg"; // Ruta del icono
        icon.alt = "Limpiar selección";
        icon.classList.add("clear-icon"); // Clase para estilos del icono

        // Agregar el icono DESPUÉS del texto
        clearBtn.appendChild(icon);

        tagsContainer.appendChild(clearBtn);

    }

    function toggleTag(tag, button) {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            button.classList.remove("selected");
        } else {
            selectedTags.add(tag);
            button.classList.add("selected");
        }
        filterCareers();
    }

    function clearSelection() {
        selectedTags.clear(); // Vacía todas las selecciones
        document.querySelectorAll(".tags button").forEach(button => {
            button.classList.remove("selected");
        });
        filterCareers();
    }

    function filterCareers() {
        careersContainer.innerHTML = "";

        if (selectedTags.size === 0) {
            careersContainer.innerHTML = "<p class='info-message'>Selecciona una o más habilidades clave para ver las carreras relacionadas.</p>";
            return;
        }

        const filteredCareers = careersData.filter(career =>
            career.tags.some(tag => selectedTags.has(tag))
        );

        if (filteredCareers.length === 0) {
            careersContainer.innerHTML = "<p class='info-message'>No hay carreras disponibles para las habilidades seleccionadas.</p>";
            return;
        }

        filteredCareers.forEach(career => {
            const careerItem = document.createElement("div");
            careerItem.classList.add("career-item");
            careerItem.innerHTML = `<h4>${career.title}</h4>`;

            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("career-description");
            descriptionDiv.textContent = career.description;
            descriptionDiv.style.display = "none"; // Se oculta inicialmente

            careerItem.appendChild(descriptionDiv);
            careerItem.addEventListener("click", () => {
                document.querySelectorAll(".career-description").forEach(desc => {
                    if (desc !== descriptionDiv) {
                        desc.style.display = "none";
                    }
                });

                descriptionDiv.style.display = descriptionDiv.style.display === "block" ? "none" : "block";
            });

            careersContainer.appendChild(careerItem);
        });
    }

    renderTags();
    filterCareers();
});
