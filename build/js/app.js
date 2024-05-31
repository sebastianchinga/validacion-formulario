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
    const inputNombre = document.querySelector('#nombre');
    const span = document.querySelector('#span-nombre');
    if (!inputNombre.value) {
        inputNombre.classList.add('formulario__input--error')
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
        inputNombre.classList.remove('formulario__input--error')
        inputNombre.classList.add('formulario__input--exito')
    }
}

function validarApellido() {
    const inputApellido = document.querySelector('#apellido');
    const span = document.querySelector('#span-apellido');
    if (!inputApellido.value) {
        inputApellido.classList.add('formulario__input--error')
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
        inputApellido.classList.remove('formulario__input--error')
        inputApellido.classList.add('formulario__input--exito')
    }
}

function validarEmail() {
    const inputEmail = document.querySelector('#email');
    const span = document.querySelector('#span-email');
    if (!inputEmail.value) {
        inputEmail.classList.add('formulario__input--error')
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
        inputEmail.classList.remove('formulario__input--error')
        inputEmail.classList.add('formulario__input--exito')
    }
}

function validarQuery() {
    const span = document.querySelector('#span-query');
    let s = false
    for (let index = 0; index<document.formp.query.length; index++) {
        if (document.formp.query[index].checked) {
            s = true;
        }
        
    }
    if (!s) {
        span.classList.add('span-block');
    } else {
        span.classList.remove('span-block');
    }
}

function validarMensaje() {
    const inputMensaje = document.querySelector('#mensaje');
    const span = document.querySelector('#span-mensaje');
    if (!inputMensaje.value) {
        inputMensaje.classList.add('formulario__input--error')
        span.classList.add('span-block')
    } else {
        span.classList.remove('span-block');
        inputMensaje.classList.remove('formulario__input--error')
        inputMensaje.classList.add('formulario__input--exito')
    }
}