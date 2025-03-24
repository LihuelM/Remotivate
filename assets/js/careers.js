document.addEventListener("DOMContentLoaded", function () {
    let selectedTags = new Set();

    const tagsContainer = document.querySelector(".tags");
    const careersContainer = document.querySelector(".careers");

    // INTERSECTION OBSERVER para animaciones fade-in
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);
    

    function observeFadeIns() {
        const newFaders = document.querySelectorAll('.fade-in:not(.visible)');
        newFaders.forEach(el => observer.observe(el));
    }

    function renderTags() {
        tagsContainer.innerHTML = "";
        const allTags = new Set(careersData.flatMap(career => career.tags));

        allTags.forEach(tag => {
            const tagBtn = document.createElement("button");
            tagBtn.textContent = tag;
            tagBtn.addEventListener("click", () => toggleTag(tag, tagBtn));
            tagsContainer.appendChild(tagBtn);
        });

        // Botón "Limpiar selección"
        const clearBtn = document.createElement("button");
        clearBtn.classList.add("clear-button");
        clearBtn.textContent = "Limpiar selección";
        clearBtn.addEventListener("click", clearSelection);

        const icon = document.createElement("img");
        icon.src = "images/trash.svg";
        icon.alt = "Limpiar selección";
        icon.classList.add("clear-icon");

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
        selectedTags.clear();
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
            careerItem.classList.add("career-item", "fade-in");

            careerItem.innerHTML = `<h4>${career.title}</h4>`;

            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("career-description");
            descriptionDiv.textContent = career.description;
            descriptionDiv.style.display = "none";

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

        observeFadeIns(); // <-- IMPORTANTE para animar las nuevas tarjetas
    }

    renderTags();
    filterCareers();
});
