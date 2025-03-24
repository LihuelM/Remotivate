document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(containerId, filePath) {
        const base = getBasePath(); // Viene de pathResolver.js
        const fullPath = base + "components/" + filePath;

        fetch(fullPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) container.innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar ${filePath}:`, error));
    }

    loadComponent("header-container", "header.html");
    loadComponent("footer-container", "footer.html");
});
