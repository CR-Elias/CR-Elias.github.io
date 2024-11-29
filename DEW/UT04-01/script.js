// script.js

document.addEventListener("DOMContentLoaded", () => {
    const documentType = document.getElementById("document-type");
    const inputContainer = document.getElementById("input-container");

    // Función para crear el input dinámicamente
    const createInputField = (type) => {
        // Limpia el contenedor del input
        inputContainer.innerHTML = "";

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "document-input";
        inputField.name = "document";

        if (type === "dni") {
            inputField.placeholder = "Ingrese su DNI";
            inputField.pattern = "\\d{8}[A-Za-z]";
            inputField.title = "Debe contener 8 números seguidos de una letra mayúscula";
            inputField.required = true;
        } else if (type === "nie") {
            inputField.placeholder = "Ingrese su NIE";
            inputField.pattern = "[XYZxyz]\\d{7}[A-Za-z]";
            inputField.title = "Debe comenzar con X, Y o Z, seguido de 7 números y una letra mayúscula";
            inputField.required = true;
        } else {
            inputField.placeholder = "No disponible";
            inputField.required = true;
            inputField.readOnly = true;
        }

        inputContainer.appendChild(inputField);
    };

    // Evento para cambiar el input dinámico según la selección
    documentType.addEventListener("change", (event) => {
        createInputField(event.target.value);
    });

    // Inicialización con la opción por defecto (nada)
    createInputField("none");
});

// Mostrar u ocultar la contraseña
document.getElementById("show-password").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

// Validar el formulario antes de enviarlo
document.getElementById("formulario-registro").addEventListener("submit", function (e) {
    const form = e.target;
    let isValid = true;

    var selectedAficiones = [];
    // Validar que al menos una afición esté marcada
    const aficiones = document.querySelectorAll("input[name='aficiones']:checked");
    
    aficiones.forEach(function(aficion) {
        selectedAficiones.push(aficion.value); 
      });



    var LastAficion = document.getElementById("aficiones");
    LastAficion.value = selectedAficiones.join(",");

    // Si no se ha seleccionado ninguna afición
    if (aficiones.length === 0) {
        alert("Debes seleccionar al menos una afición.");

        e.preventDefault();  // Evita el envío del formulario
    }

    // Validar todos los campos obligatorios
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    inputs.forEach(input => {
        if (!input.validity.valid) {
            alert(`El campo "${input.placeholder || input.name}" es obligatorio o contiene datos incorrectos.`);
            input.focus();
            isValid = false;
            return;
        }
    });

    if (!isValid) {
        e.preventDefault(); // Cancelar el envío si hay errores
    }
});

