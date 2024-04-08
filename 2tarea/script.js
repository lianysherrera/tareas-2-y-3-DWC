const  dni = document.getElementsByTagName("input")[0];
const  clave = document.getElementsByTagName("input")[1];
const entrar = document.getElementsByTagName("input")[2];
const teclado = document.getElementById("teclado");

const ojo = document.getElementsByTagName("img")[0];
const ojoOculto = document.getElementsByTagName("img")[1];

let midatos = [
    { 
        dni: "12345678A", 
        clave: "1234"
    }
];

let datos = midatos;

entrar.addEventListener("click", () => {
    if(dni.value.trim() === "") {
        alert("Por favor, introduce tu DNI");
    } else if(clave.value.trim() === "") {
        alert("Por favor, introduce tu clave.");
    } else if(!/^\d{1,4}$/.test(clave.value.trim())) {
        alert("La clave debe contener solo números y tener máximo 4 dígitos.");
    } else {
        const encontrado = datos.find((dato) => dato.dni === dni.value.trim() && dato.clave === clave.value.trim());
        if (encontrado) {
            const mensajeBienvenida = document.createElement("p");
            mensajeBienvenida.textContent = "¡Bienvenido! DNI introducido: " + dni.value.trim();
            document.body.appendChild(mensajeBienvenida);

            const header = document.getElementsByTagName("header")[0];
            const formulario = document.getElementsByTagName("form")[0];
            formulario.style.display = "none";
            header.style.display = "none";
        } else {
            alert("DNI o clave incorrectos. Por favor, inténtelo de nuevo.");
        }
    }
});

ojo.addEventListener("click", () => {
    if (clave.type === "password") {
        clave.type = "text";
        ojo.style.display = "none";
        ojoOculto.style.display = "inline";
        teclado.style.display = "block";
    } else {
        clave.type = "password";
        ojo.style.display = "inline";
        ojoOculto.style.display = "none";
        teclado.style.display = "none";
    }
});

ojoOculto.addEventListener("click", () => {
    if (clave.type === "text") {
        clave.type = "password";
        ojo.style.display = "inline";
        ojoOculto.style.display = "none";
        teclado.style.display = "none";
    }
});

