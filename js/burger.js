// Sélection des éléments
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const nav = document.querySelector("nav"); // Sélection de l'élément nav

// Fonction pour ouvrir le menu
function openNav() {
    sidenav.classList.add("open"); // Ajout de la classe open à .side-nav
    nav.style.opacity = "1"; // Afficher le contenu de nav
    nav.style.visibility = "visible"; // Rendre le contenu visible
    openBtn.innerHTML = "&times;"; // Change l'icône en croix
}

// Fonction pour fermer le menu
function closeNav() {
    sidenav.classList.remove("open"); // Enlever la classe open de .side-nav
    nav.style.opacity = "0"; // Cacher le contenu de nav
    nav.style.visibility = "hidden"; // Masquer le contenu
    openBtn.innerHTML = "&#9776;"; // Change l'icône en burger
}

// Événements click pour ouvrir et fermer le menu
openBtn.onclick = function() {
    if (sidenav.classList.contains("open")) {
        closeNav(); // Ferme si déjà ouvert
    } else {
        openNav(); // Ouvre si fermé
    }
};
