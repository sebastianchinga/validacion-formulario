document.addEventListener('DOMContentLoaded', function() {
    inicarApp();
})

const contacto = {
    nombre: '',
    apellido: '',
    email: '',
    type: '',
    mensaje: ''
}

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
        validarObjeto();
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
        inputNombre.classList.remove('formulario__input--error');
        inputNombre.classList.add('formulario__input--exito');
        contacto.nombre = inputNombre.value;
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
        inputApellido.classList.add('formulario__input--exito');
        contacto.apellido = inputApellido.value;
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
        inputEmail.classList.add('formulario__input--exito');
        contacto.email = inputEmail.value;
    }
}

function validarQuery() {
    const span = document.querySelector('#span-query');
    let s = false
    for (let index = 0; index<document.formp.query.length; index++) {
        if (document.formp.query[index].checked) {
            s = true;
            contacto.type = document.formp.query[index].value;
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
        inputMensaje.classList.add('formulario__input--exito');
        contacto.mensaje = inputMensaje.value
    }
}

function validarObjeto() {
    if (!contacto.nombre || !contacto.apellido || !contacto.email || !contacto.type || !contacto.mensaje) {
        // console.log('Campos no llenados');
    } else {
        mostrarNotificacion();
    }
}

function mostrarNotificacion() {
    const notificacion = document.querySelector('#notificacion');
    notificacion.classList.remove('notificacion--ocultar');
    setTimeout(() => {
        resetearCampos();
        notificacion.classList.add('notificacion--ocultar');
    }, 3000);
}

function resetearCampos() {
    const nombre = document.querySelector('#nombre');
    nombre.value = '';

    const apellido = document.querySelector('#apellido');
    apellido.value = '';

    const email = document.querySelector('#email');
    email.value = '';

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });


    const mensaje = document.querySelector('#mensaje');
    mensaje.value = '';

    resetearObjetoContacto();
}

function resetearObjetoContacto() {
    contacto.nombre = '',
    contacto.apellido = '',
    contacto.email = '',
    contacto.type = '',
    contacto.mensaje = ''
}