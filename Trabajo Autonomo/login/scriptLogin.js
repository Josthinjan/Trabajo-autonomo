// Agrega un evento keypress al campo de contraseña para detectar la tecla "Enter".
document.getElementById("principal").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        login(); // Llama a la función login cuando se presiona "Enter".
    }
});

function login() {
    var usuario = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var mensaje = document.getElementById("mensaje");

    if (usuario === "usuario@gmail" && contraseña === "contraseña") {
        estalogeado = true; // Marcar al usuario como autenticado
        window.location.href = "../main/principal.html";
    } else {
        mensaje.innerHTML = "Nombre de usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }

    // Evita que el formulario se envíe automáticamente.
    event.preventDefault();
}




