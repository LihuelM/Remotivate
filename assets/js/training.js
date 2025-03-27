document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("carousel-container");

  const categorias = {
    tecnologia_programacion: {
      titulo: "Tecnología & Programación",
      descripcion: "Ideal para quienes quieren aprender a programar, desarrollar software o entrar en el mundo tech.",
      data: tecnologia_programacion
    },
    creativos_diseño: {
      titulo: "Creatividad & Diseño",
      descripcion: "Arte, diseño gráfico, UX/UI y creatividad digital.",
      data: creativos_diseño
    },
    negocios_marketing_emprendimiento: {
      titulo: "Negocios, Marketing & Emprendimiento",
      descripcion: "Redes sociales, ventas, negocios digitales y más.",
      data: negocios_marketing_emprendimiento
    },
    habilidades_generales_y_profesionales: {
      titulo: "Habilidades Profesionales & Generales",
      descripcion: "Productividad, comunicación, herramientas digitales y más.",
      data: habilidades_generales_y_profesionales
    },
    academico_universitario: {
      titulo: "Formación Académica & Universitaria",
      descripcion: "Plataformas asociadas a universidades y formación formal.",
      data: academico_universitario
    }
  };

  Object.entries(categorias).forEach(([key, { titulo, descripcion, data }]) => {
    const section = document.createElement("section");
    section.className = "carousel-section";

    section.innerHTML = `
      <h2>${titulo}</h2>
      <p>${descripcion}</p>
      <div class="carousel-wrapper">
        <button class="carousel-btn prev" id="prev-${key}">&#10094;</button>
        <div class="carousel-track-wrapper">
          <div class="carousel-track" id="track-${key}"></div>
        </div>
        <button class="carousel-btn next" id="next-${key}">&#10095;</button>
      </div>
      <div class="carousel-dots" id="dots-${key}"></div>
    `;

    container.appendChild(section);

    const track = section.querySelector(`#track-${key}`);
    const dotsContainer = section.querySelector(`#dots-${key}`);
    const prevBtn = section.querySelector(`#prev-${key}`);
    const nextBtn = section.querySelector(`#next-${key}`);

    const cardWidth = 260 + 20; // card width + gap
    const originalData = [...data];
    const totalSlides = originalData.length;

    // Duplicar para loop
    const loopData = [...originalData, ...originalData];
    loopData.forEach(platform => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
        <img src="${platform.image}" alt="${platform.title}">
        <div class="card-info">
          <p>${platform.description}</p>
          <p><strong>Costo:</strong> ${platform.costo}</p>
          <p><strong>Certificaciones:</strong> ${platform.certificaciones}</p>
          <a href="${platform.link}" target="_blank" class="btn-card">Visitar</a>
        </div>
      `;
      track.appendChild(card);
    });

    // Config
    let position = 0;
    const step = 1; // px por frame
    const visibleSlides = 4;
    const pages = Math.ceil(totalSlides / visibleSlides);
    let currentPage = 0;

    function updateDots() {
      [...dotsContainer.children].forEach(dot => dot.classList.remove("active"));
      dotsContainer.children[currentPage]?.classList.add("active");
    }

    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("span");
      dot.className = "carousel-dot";
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        stopAutoplay();
        currentPage = i;
        position = currentPage * cardWidth * visibleSlides;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${position}px)`;
        updateDots();
        resumeAutoplay();
      });
      dotsContainer.appendChild(dot);
    }

    prevBtn.addEventListener("click", () => {
      stopAutoplay();
      currentPage = (currentPage - 1 + pages) % pages;
      position = currentPage * cardWidth * visibleSlides;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${position}px)`;
      updateDots();
      resumeAutoplay();
    });

    nextBtn.addEventListener("click", () => {
      stopAutoplay();
      currentPage = (currentPage + 1) % pages;
      position = currentPage * cardWidth * visibleSlides;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${position}px)`;
      updateDots();
      resumeAutoplay();
    });

    // Autoplay loop infinito con rAF
    let autoplay = true;
    let rafId;

    function animate() {
      if (autoplay) {
        position += step;
        if (position >= track.scrollWidth / 2) {
          position = 0;
        }
        track.style.transform = `translateX(-${position}px)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    function stopAutoplay() {
      autoplay = false;
    }

    function resumeAutoplay() {
      autoplay = true;
    }

    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("mouseleave", resumeAutoplay);

    animate(); // Start autoplay
  });
});
