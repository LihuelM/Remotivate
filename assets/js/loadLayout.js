document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(containerId, filePath) {
        // Detecta si la página está en "/pages/"
        let basePath = window.location.pathname.includes("/pages/") ? "../components/" : "components/";

        fetch(basePath + filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar ${filePath}:`, error));
    }

    // Cargar header y footer en el HTML
    loadComponent("header-container", "header.html");
    loadComponent("footer-container", "footer.html");
});
