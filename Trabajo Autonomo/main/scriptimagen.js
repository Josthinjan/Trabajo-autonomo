function manejarArrastre(event) {
    event.preventDefault();
}

function soltarImagen(event) {
    event.preventDefault();
    var imagen = event.dataTransfer.files[0];
    var imagenMostrar = document.getElementById('imagen');
    var texto = document.getElementById('texto');
    var contenedor = document.getElementById('contenedor');

    if (imagen.type.match('image.*')) {
        var lector = new FileReader();

        lector.onload = function (e) {
            imagenMostrar.src = e.target.result;
            texto.style.display = 'none';
            imagenMostrar.style.display = 'block';

            // Ajustar solo la altura del contenedor
            contenedor.style.height = imagenMostrar.clientHeight + 'px';
        };

        lector.readAsDataURL(imagen);
    }
}

function cargarImagenPorClic() {
    var input = document.getElementById('inputImagen');
    var imagenMostrar = document.getElementById('imagen');
    var texto = document.getElementById('texto');
    var contenedor = document.getElementById('contenedor');

    input.addEventListener('change', function (event) {
        var imagen = event.target.files[0];

        if (imagen.type.match('image.*')) {
            var lector = new FileReader();

            lector.onload = function (e) {
                imagenMostrar.src = e.target.result;
                texto.style.display = 'none';
                imagenMostrar.style.display = 'block';

                // Ajustar solo la altura del contenedor
                contenedor.style.height = imagenMostrar.clientHeight + 'px';
            };

            lector.readAsDataURL(imagen);
        }
    });

    input.click();
}
