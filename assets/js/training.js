document.addEventListener("DOMContentLoaded", function () {
  const categorias = {
    tecnologia_programacion: {
      titulo: "Innovación, Tecnología, Procesamiento de Datos",
      data: tecnologia_programacion
    },
    creativos_diseño: {
      titulo: "Creatividad, Expresión Artística, Diseño",
      data: creativos_diseño
    },
    negocios_marketing_emprendimiento: {
      titulo: "Comunicación, Negocios, Marketing, Emprendimiento",
      data: negocios_marketing_emprendimiento
    },
    habilidades_sociales_y_organizativas: {
      titulo: "Habilidades Sociales, Organizativas, Administrativas",
      data: habilidades_sociales_y_organizativas
    },
    educacion_y_formacion: {
      titulo: "Formación, Capacitación, Educación",
      data: educacion_y_formacion
    },
    idiomas: {
      titulo: "Idiomas",
      data: idiomas
    },
    universitarios: {
      titulo: "Academicos, Universitario",
      data: academico_universitario
    }
  };

  const categoryList = document.getElementById("category-list");
  const gallery = document.getElementById("platform-gallery");
  const details = document.getElementById("platform-details");

  // Renderiza las categorías en la sidebar
  Object.entries(categorias).forEach(([key, { titulo }]) => {
    const li = document.createElement("li");
    li.textContent = titulo;
    li.dataset.key = key;
    li.classList.add("category-item");
    li.addEventListener("click", () => renderGallery(key));
    categoryList.appendChild(li);
  });

  // Detectar parámetro en la URL
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("categoria");  

  if (selectedCategory && categorias[selectedCategory]) {
    renderGallery(selectedCategory);
  } else {
    const firstKey = Object.keys(categorias)[0];
    renderGallery(firstKey);
  }

  // Muestra las plataformas en la galería central
  function renderGallery(key) {
    const data = categorias[key].data;
    gallery.innerHTML = ""; // Limpiar galería
    details.innerHTML = "<p>Haz clic en una plataforma para ver sus detalles.</p>"; // Reset detalle

    data.forEach(platform => {
      const img = document.createElement("img");
      img.src = platform.image;
      img.alt = platform.title;
      img.title = platform.title;
      img.addEventListener("click", () => renderDetails(platform));
      gallery.appendChild(img);
    });

    // Marca activa la categoría seleccionada
    [...categoryList.children].forEach(el => el.classList.remove("active"));
    const activeItem = [...categoryList.children].find(li => li.dataset.key === key);
    activeItem?.classList.add("active");
  }

  function renderDetails(platform) {
    // Remover la clase 'selected' de todas las imágenes
    const allImages = document.querySelectorAll("#platform-gallery img");
    allImages.forEach(img => img.classList.remove("selected"));  

    // Buscar la imagen correspondiente y marcarla
    const selectedImg = [...allImages].find(img => img.alt === platform.title);
    if (selectedImg) selectedImg.classList.add("selected");  

    // Render del detalle
    details.innerHTML = `
      <div class="details-wrapper">
        <img src="${platform.image}" alt="${platform.title}">
        <div class="details-content">
          <h3>${platform.title}</h3>
          <p>${platform.description}</p>
          <p><strong>Costo:</strong> ${platform.costo}</p>
          <p><strong>Certificaciones:</strong> ${platform.certificaciones}</p>
          <a href="${platform.link}" target="_blank" class="btn-card">Visitar sitio</a>
        </div>
      </div>
    `;
  }


});
