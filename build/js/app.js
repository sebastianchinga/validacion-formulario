document.addEventListener('DOMContentLoaded', function() {
    inicarApp();
})

function inicarApp() {
    validarFormulario();
}

function validarFormulario() {
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', function(e) {
        e.preventDefault();
        validarNombre();
        validarApellido();
        validarEmail();
        validarQuery();
        validarMensaje();
    })
}

function validarNombre() {
    const inputNombre = document.querySelector('#nombre').value;
    const span = document.querySelector('#span-nombre');
    if (!inputNombre) {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}

function validarApellido() {
    const inputApellido = document.querySelector('#apellido').value;
    const span = document.querySelector('#span-apellido');
    if (!inputApellido) {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}

function validarEmail() {
    const inputEmail = document.querySelector('#email').value;
    const span = document.querySelector('#span-email');
    if (!inputEmail) {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}

function validarQuery() {
    const span = document.querySelector('#span-query');
    let s = "no"
    for (let index = 0; index<document.formp.query.length; index++) {
        if (document.formp.query[index].checked) {
            // console.log("Marcó "+document.formp.query[index].value);
            s = "si";
        }
        
    }
    if (s == "no") {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}

function validarMensaje() {
    const inputMensaje = document.querySelector('#mensaje').value;
    const span = document.querySelector('#span-mensaje');
    if (!inputMensaje) {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}