// 1. Mensaje de bienvenida al cargar la pantalla
window.onload = function() {
    alert("¡Bienvenido a mi portafolio profesional, soy Brayan Lozada!");
};

// 2. Cambiar el texto de un párrafo
const parrafo = document.getElementById("parrafo-bio");
const botonCambiar = document.getElementById("btn-cambiar");

// 3. Efecto dinámico: Mostrar/Ocultar contenido
const infoExtra = document.getElementById("info-extra");

botonCambiar.addEventListener("click", function() {
    // Lógica dinámica: Mostrar u ocultar el div
    if (infoExtra.style.display === "none") {
        infoExtra.style.display = "block";
        botonCambiar.innerText = "Ver menos";
        botonCambiar.style.backgroundColor = "#333"; // Cambio de color dinámico
    } else {
        infoExtra.style.display = "none";
        botonCambiar.innerText = "Ver más sobre mi perfil";
        botonCambiar.style.backgroundColor = "#8C1AF6";
    }
});