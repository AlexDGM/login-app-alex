const formulario = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        usuario.value.trim() === "" ||
        contrasena.value.trim() === ""
    ) {
        mensaje.style.color = "#b42318";
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    mensaje.style.color = "#15803d";
    mensaje.textContent = "Validación correcta. Formulario de prueba.";
});