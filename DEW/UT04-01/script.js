


// -------------------------PRECARGA DE PAGINA-------------------------

document.addEventListener("DOMContentLoaded", () => {
    
    const inputContainer = document.getElementById("input-container");
    const formulario = document.getElementById("formulario-registro");
    
    const NombreUsuario = document.getElementById("NombreUsuario");
    const NombreUsuarioError = document.getElementById('NombreUsuarioError');
    const Contrasena = document.getElementById("Contrasena");
    const ContrasenaError = document.getElementById("ContrasenaError");
    const Nombre = document.getElementById("Nombre");
    const NombreError = document.getElementById("NombreError");
    const Apellidos = document.getElementById("Apellidos");
    const ApellidosError = document.getElementById("ApellidosError");
    const Telefono = document.getElementById("Telefono");
    const TelefonoError = document.getElementById("TelefonoError");
    const CodigoPostal = document.getElementById("CodigoPostal");
    const CodigoPostalError = document.getElementById("CodigoPostalError");
    const TipoDocumento = document.getElementById("TipoDocumento");
    const DocumentoError = document.getElementById("DocumentoError");
    const AnioNacimiento = document.getElementById("AnioNacimiento");
    const AnioNacimientoError = document.getElementById("AnioNacimientoError");
    const CuentaComo = document.getElementById("CuentaComo");
    const CuentaComoError = document.getElementById("CuentaComoError");
    const AficionesError = document.getElementById("AficionesError");
    const PublicacionTitulo = document.getElementById("PublicacionTitulo");
    const PublicacionTituloError = document.getElementById("PublicacionTituloError");
    const PublicacionDescripcion = document.getElementById("PublicacionDescripcion");
    const PublicacionDescripcionError = document.getElementById("PublicacionDescripcionError");

    visiblePassword();
    addInputDNINIE(TipoDocumento,inputContainer);
    addZonaError();
    const ErrorZone = document.getElementById("ErrorZone");
    const ErrorList = document.getElementById("ErrorList");
    listaAgnos();

    formulario.addEventListener("submit", (e) =>{
            let isValid = Validation(e);
            if(isValid=true)
                {
                    formulario.addEventListener("input", (e) =>{
                        Validation(e);
                    })
                }

            
    })




    function  Validation(e){
        let isValid = true;
        ErrorList.textContent="";
        
        if (!NombreUsuario.validationMessage == "") {
            isValid = false;
            NombreUsuarioError.textContent = "El Nombre de Usuario esta vacio o es incorrecto";
            NombreUsuarioError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${NombreUsuario.name}: ${NombreUsuario.validationMessage}`
            ErrorList.appendChild(li);
            //NombreUsuario.focus();
        } else {
            NombreUsuarioError.textContent = '';
            NombreUsuarioError.style.display = 'none';
        }

        if (!Contrasena.validationMessage == "") {
            isValid = false;
            ContrasenaError.textContent = "La Contraseña esta vacia o es incorrecta";
            ContrasenaError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${Contrasena.name}: ${Contrasena.validationMessage}`
            ErrorList.appendChild(li);
            //Contrasena.focus();
        } else {
            ContrasenaError.textContent = '';
            ContrasenaError.style.display = 'none';
        }

        if (!Nombre.validationMessage == "") {
            isValid = false;
            NombreError.textContent = "El Nombre esta vacio o es incorrecto";
            NombreError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${Nombre.name}: ${Nombre.validationMessage}`
            ErrorList.appendChild(li);
            //Nombre.focus();
        } else {
            NombreError.textContent = '';
            NombreError.style.display = 'none';
        }

        if (!Apellidos.validationMessage == "") {
            isValid = false;
            ApellidosError.textContent = "El Apellido esta vacio o es incorrecto";
            ApellidosError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${Apellidos.name}: ${Apellidos.validationMessage}`
            ErrorList.appendChild(li);
            //Apellidos.focus();
        } else {
            ApellidosError.textContent = '';
            ApellidosError.style.display = 'none';
        }

        if (!Telefono.validationMessage == "") {
            isValid = false;
            TelefonoError.textContent = "El Telefono esta vacio o es incorrecto";
            TelefonoError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${Telefono.name}: ${Telefono.validationMessage}`
            ErrorList.appendChild(li);
            //Telefono.focus();
        } else {
            TelefonoError.textContent = '';
            TelefonoError.style.display = 'none';
        }

        if (!CodigoPostal.validationMessage == "") {
            isValid = false;
            CodigoPostalError.textContent = "El Codigo Postal esta vacio o es incorrecto";
            CodigoPostalError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${CodigoPostal.name}: ${CodigoPostal.validationMessage}`
            ErrorList.appendChild(li);
            //CodigoPostal.focus();
        } else {
            CodigoPostalError.textContent = '';
            CodigoPostalError.style.display = 'none';
        }
        if (!TipoDocumento.validationMessage == "") {
            isValid = false;
            DocumentoError.textContent = "Seleccione DNI o NIE";
            DocumentoError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${TipoDocumento.name}: ${TipoDocumento.validationMessage}`
            ErrorList.appendChild(li);
            //TipoDocumento.focus();
        } else {
            const DniNie = document.getElementById("DniNie");
            if (!DniNie.validationMessage == "") {
                isValid = false;
                DocumentoError.textContent = "El NIE o DNI esta vacio o es incorrecto";
                DocumentoError.style.display = 'block';
                let li =document.createElement("li")
                li.textContent = `${DniNie.name}: ${DniNie.validationMessage}`
                ErrorList.appendChild(li);
                //DniNie.focus();
            } else {
                DocumentoError.textContent = '';
                DocumentoError.style.display = 'none';
            }
        }
        
        if (!CuentaComo.validationMessage == "") {
            isValid = false;
            CuentaComoError.textContent = "Es obligatorio selecionar un tipo de cuenta";
            CuentaComoError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${CuentaComo.name}: ${CuentaComo.validationMessage}`
            ErrorList.appendChild(li);
            //CuentaComo.focus();
        } else {
            CuentaComoError.textContent = '';
            CuentaComo.style.display = 'none';
        }
        if (!AnioNacimiento.validationMessage == "") {
            isValid = false;
            AnioNacimientoError.textContent = "Es obligatorio selecionar un año de nacimieno";
            AnioNacimientoError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${AnioNacimiento.name}: ${AnioNacimiento.validationMessage}`
            ErrorList.appendChild(li);
            //AnioNacimiento.focus();
        } else {
            AnioNacimientoError.textContent = '';
            AnioNacimientoError.style.display = 'none';
        }

/////////////////////////////////////////////////////////////////////////////////////////////
        const Aficiones = document.querySelectorAll("input[name='Aficiones']:checked");

        var selectedAficiones = [];
        Aficiones.forEach(function(aficion) {selectedAficiones.push(aficion.value);});
        var LastAficion = document.getElementById("Aficiones");
        LastAficion.value = selectedAficiones;

          console.log(selectedAficiones);
    
        if (Aficiones.length < 2) {
            isValid = false;
            AficionesError.textContent = "Seleccione almenos 2 aficiones";
            AficionesError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `Aficiones: Seleccione almenos 2 aficiones`
            ErrorList.appendChild(li);
        }
        else{
            AficionesError.textContent = '';
            AficionesError.style.display = 'none';
        }
/////////////////////////////////////////////////////////////////////////////////////////////
        if (!PublicacionTitulo.validationMessage == "") {
            isValid = false;
            PublicacionTituloError.textContent = "El Titulo ha de tener minimo 4 caracteres";
            PublicacionTituloError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${PublicacionTitulo.name}: ${PublicacionTitulo.validationMessage}`
            ErrorList.appendChild(li);
            //PublicacionTitulo.focus();
        } else {
            PublicacionTituloError.textContent = '';
            PublicacionTituloError.style.display = 'none';
        }
        if (!PublicacionDescripcion.validationMessage == "") {
            isValid = false;
            PublicacionDescripcionError.textContent = "La Descripcion ha de tener minimo 4 caracteres";
            PublicacionDescripcionError.style.display = 'block';
            let li =document.createElement("li")
            li.textContent = `${PublicacionDescripcion.name}: ${PublicacionDescripcion.validationMessage}`
            ErrorList.appendChild(li);
            //PublicacionDescripcion.focus();
        } else {
            PublicacionDescripcionError.textContent = '';
            PublicacionDescripcionError.style.display = 'none';
        }




        if (!isValid) {
            ErrorZone.style.display= "block";
            e.preventDefault();
          }
          else
          {
            ErrorZone.style.display= "none";
          }

        return isValid;
    }

    

});





function visiblePassword()
{
    document.getElementById("show-Contrasena").addEventListener("change", function () {
        const ContrasenaField = document.getElementById("Contrasena");
        ContrasenaField.type = this.checked ? "text" : "password";
    });
}

function addInputDNINIE(documentType,inputContainer) {
    // Función para crear el input dinámicamente
    const createInputField = (type) => {
        // Limpia el contenedor del input
        inputContainer.innerHTML = null;

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "DniNie";
        inputField.id = "DniNie";

        if (type === "DNI") {
            inputField.placeholder = "Ingrese su DNI";
            inputField.pattern = "\\d{8}[A-Za-z]";
            inputField.title = "Debe contener 8 números seguidos de una letra mayúscula";
            inputField.required = true;
        } else if (type === "NIE") {
            inputField.placeholder = "Ingrese su NIE";
            inputField.pattern = "[XYZxyz]\\d{7}[A-Za-z]";
            inputField.title = "Debe comenzar con X, Y o Z, seguido de 7 números y una letra mayúscula";
            inputField.required = true;
        } else {
            inputField.placeholder = "No disponible";
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
}
function addZonaError() {
    const errorZone = document.createElement("div");
    errorZone.id = "ErrorZone";
    const header = document.createElement("h3");
    header.textContent = "Errores";
    const errorList = document.createElement("ul");
    errorList.id = "ErrorList";
    errorZone.appendChild(header);
    errorZone.appendChild(errorList);

    document.body.appendChild(errorZone);
}

function listaAgnos()
{
    // Obtiene el elemento <select> por su ID
    const select = document.getElementById('AnioNacimiento');
    // Agrega las opciones al <select>
    for (let i = 1920; i <= 2010; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}
function counterTitulo()
{
    const input1 = document.getElementById('PublicacionTitulo');
    const counter1 = document.getElementById('charCounter1');
    const length1 = input1.value.length;

    counter1.textContent = `${length1}/15`;
}
function counterDescripcion()
{
    const input2 = document.getElementById('PublicacionDescripcion');
    const counter2 = document.getElementById('charCounter2');
    const length2 = input2.value.length;

    counter2.textContent = `${length2}/120`;
}












