document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(containerId, filePath, callback) {
        const base = getBasePath();
        const fullPath = base + "components/" + filePath;

        fetch(fullPath)
            .then(response => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) container.innerHTML = data;
                if (callback) callback(); // Ejecutar callback si existe
            })
            .catch(error => console.error(`Error al cargar ${filePath}:`, error));
    }

    // Primero cargamos el header, luego corremos el script que arma el nav
    loadComponent("header-container", "header.html", function () {
        if (typeof buildMobileNav === "function") buildMobileNav();
    });

    loadComponent("footer-container", "footer.html");
});
