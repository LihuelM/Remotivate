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

    // Manejo del toggle exclusivo para intro-cards
    document.querySelectorAll('.intro-card').forEach(card => {
        card.addEventListener('click', function (e) {
          // Evitar que el clic en los botones afecte la lógica
          if (e.target.tagName === 'BUTTON') return;
    
          document.querySelectorAll('.intro-card .card-content').forEach(content => {
            if (!content.classList.contains('hidden')) {
              content.classList.add('hidden');
            }
          });
    
          const content = this.querySelector('.card-content');
          content.classList.toggle('hidden');
        });
      });

    // Relación entre categorías y tags relevantes
    const categoryTagsMap = {
        "Habilidades Sociales y Organizativas": ["Gestión", "Organización", "Liderazgo", "Trabajo en Equipo"],
        "Comunicación y Estrategias de Ventas": ["Comunicación", "Negociación", "Motivación", "Persuasión", "Orientación a Resultados"],
        "Innovación, Tecnología y/o Procesamiento de Datos": ["Innovación", "Análisis", "Optimización", "Resolución de Problemas", "Lógica", "Seguridad"],
        "Creatividad y Expresión Artística": ["Creatividad", "Narrativa", "Diseño", "Percepción Visual", "Observación"],
        "Enfoque en Educación y Formación": ["Formación", "Empatía", "Comunicación", "Motivación"],
        "Pensamiento Analítico y Estratégicas": ["Capacidad de Analisis", "Pensamiento Crítico", "Estrategia", "Toma de Decisiones"]
      };
      
      // Escucha clicks en los botones de "Ver profesiones relacionadas"
      document.querySelectorAll('.view-careers').forEach(button => {
        button.addEventListener('click', event => {
          const card = event.target.closest('.intro-card');
          const category = card.getAttribute('data-category');
          const relatedTags = categoryTagsMap[category] || [];
        
          // Simula seleccionar los tags
          const allButtons = document.querySelectorAll('.tags button');
          allButtons.forEach(btn => {
            const tag = btn.textContent.trim();
            if (relatedTags.includes(tag)) {
              btn.classList.add('selected');
            } else {
              btn.classList.remove('selected');
            }
          });
      
          // Actualiza el set de tags seleccionados globalmente
          selectedTags = new Set(relatedTags);
      
          // Ejecuta filtrado y hace scroll a resultados
          filterCareers();
          
          const target = document.getElementById("careers-container");
if (target) {
  const offset = 200;
  const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

        });
      });
      
});
