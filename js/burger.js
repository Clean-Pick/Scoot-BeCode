// Sélection des éléments
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");

// Fonction pour ouvrir le menu
function openNav() {
    sidenav.style.left = "0"; // Affiche le menu
    openBtn.classList.add("active"); // Ajoute la rotation de l'icône
    openBtn.innerHTML = "&times;"; // Change l'icône en croix
}

// Fonction pour fermer le menu
function closeNav() {
    sidenav.style.left = "-250px"; // Cache le menu
    openBtn.classList.remove("active"); // Enlève la rotation de l'icône
    openBtn.innerHTML = "&#9776;"; // Change l'icône en burger
}

// Événements click pour ouvrir et fermer le menu
openBtn.onclick = function() {
   if (sidenav.style.left === "0px") {
       closeNav(); // Ferme si déjà ouvert
   } else {
       openNav(); // Ouvre si fermé
   }
};
