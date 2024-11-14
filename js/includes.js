async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Erreur de chargement du fichier ${file}`);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;

        // Charge burger.js après avoir inséré le header
        if (id === 'header') {
            const script = document.createElement("script");
            script.src = "./header/burger.js"; // Chemin mis à jour pour burger.js
            script.defer = true;
            document.body.appendChild(script);
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent('header', 'header/header.html');
    loadComponent('footer', 'footer/footer.html');
});
