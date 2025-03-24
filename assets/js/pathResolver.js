// Devuelve el path base correcto según si estás en GitHub Pages o local
function getBasePath() {
    const pathParts = window.location.pathname.split("/");
    const isGitHubPages = location.hostname.includes("github.io");

    if (isGitHubPages) {
        // Ejemplo: /remotivate/index.html → base: /remotivate/
        return `/${pathParts[1]}/`;
    } else {
        // Local: base raíz
        return "/";
    }
}
