document.addEventListener("DOMContentLoaded", function() {
    const iconos = document.getElementById("iconos").getElementsByTagName("li");
    const palabras = document.getElementById("palabras").getElementsByTagName("li");
    const intentosSpan = document.querySelector("footer span");
    var intentos = 7; 

    function verificarCoincidencia(iconoSrc, palabra) {
        switch (iconoSrc) {
            case "imagen2.png":
                return palabra === "CSS3";
            case "imagen4.png":
                return palabra === "Figma";
            case "imagen3.png":
                return palabra === "JavaScript";
            case "imagen1.png":
                return palabra === "HTML5";
            default:
                return false;
        }
    }

    function comprobarCoincidencia(texto) {
        for (var k = 0; k < iconos.length; k++) {
            var icono = iconos[k];
            var iconoSrc = icono.querySelector("img").getAttribute("src");
            var palabra = icono.dataset.palabra;

            if (verificarCoincidencia(iconoSrc, texto)) {
                alert("¡Coincidencia encontrada con " + texto.toUpperCase() + "!");
                icono.remove();
                return true;
            }
        }
        return false;
    }

    for (var i = 0; i < iconos.length; i++) {
        iconos[i].addEventListener("click", function() {
            var textoPalabra = this.dataset.palabra;
            this.style.backgroundColor = "green";
            var coincidencia = comprobarCoincidencia(textoPalabra);
            if (!coincidencia) {
                decrementarIntentos();
            }
        });
    }

    for (var j = 0; j < palabras.length; j++) {
        palabras[j].addEventListener("click", function() {
            var textoPalabra = this.textContent.toLowerCase();
            var coincidencia = comprobarCoincidencia(textoPalabra);
            if (!coincidencia) {
                decrementarIntentos();
            }
        });
    }

    function decrementarIntentos() {
        intentos--;
        intentosSpan.textContent = intentos;
        if (intentos === 0) {
            alert("¡Te has quedado sin intentos!");
            document.querySelector("input[type='button']").disabled = true; 
        }
    }

    document.querySelector("input[type='button']").addEventListener("click", function() {
        var confirmacion = confirm("¿Seguro que te rindes y quieres ver la solución?");
        if (confirmacion) {
        }
        else {
            alert("¡Sigue intentando!");
        }
    });
});
