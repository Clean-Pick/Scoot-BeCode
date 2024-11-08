// async function loadComponent(id, file) {
//     try {
//         const response = await fetch(file);
//         if (!response.ok) throw new Error(`Erreur de chargement du fichier ${file}`);
//         const content = await response.text();
//         document.getElementById(id).innerHTML = content;
//     } catch (error) {
//         console.error(error);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     loadComponent('header', 'header.html');
//     loadComponent('footer', 'footer.html');
// });