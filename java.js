console.log("scrip cargada")

var imagen = [];
imagen[0] = "./imagenes"
imagen[1] = "./imagenes/2.jpeg"
imagen[2] = "./imagenes/3.png"
imagen[3] = "./imagenes/4.jpg"
var i = 0;
var carruimg = document.getElementById("carru")

function Izquierda() {
    console.log("scrip cargada", imagen)
    if (i > 0) {
        i--;
        carruimg.src = imagen[i];

    } else {

        i = imagen.length - 1;
        carruimg.src = imagen[i];
    }

}
function Derecha() {

    if (i < imagen.length - 1) {
        i++;
        carruimg.src = imagen[i];
    } else {
        carruimg.src = imagen[0]
        i = 1;
    }
}
function ver(e) {
    console.log(e);
}
function enviar(e) {
    if (validar()) {
        let nombre = document.getElementById("nombre");
        let edad = document.querySelector("#edad");
        let correo = document.form.correo;
        let mensaje = document.getElementById("mensaje");
        let errores = [];
        let inputs = document.querySelectorAll("input");
        let p = document.createElement("p");
        p.innerHTML = `${nombre.value}, de ${edad.value} años de edad, se suscribio con el email (${correo.value}).`;
        p.innerHTML += ` a dejado tambien el siguiente mensaje ${mensaje.value}.`;
        document.getElementById("demo").appendChild(p);
        form.reset();
    }
    return false;
}



function validar() {

    let nombre = document.getElementById("nombre");
    let correo = document.form.correo;
    let mensaje = document.getElementById("mensaje");
    let errores = [];
    let inputs = document.querySelectorAll("input");


    for (i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "revert";
    }

    let er = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (correo.value.trim() == '') {
        errores.push("Emial no puede estar vacio");
        correo.style.border = "1px solid red";
    } else if (!er.test(correo.value)) {

        errores.push("Deber ser un email valido");
        correo.style.border = "1px solid red";
    }
    if (nombre.value.trim() == '') {
        errores.push("Nombre no puede estar vacio");
        nombre.style.border = "1px solid red";
    } else if (nombre.value.length > 20) {
        errores.push("Nombre no puede exceder los 20 caracteres");
        nombre.style.border = "1px solid red";
    }
    if (mensaje.value.trim() == '') {
        errores.push("Mensaje no puede estar vacio");
        mensaje.style.border = "1px solid red";
    } else if (mensaje.length >= 20) {
        errores.push("El mensaje no puede exceder los 20 caracteres");
        mensaje.style.border = "1px solid red";
    }
    let listaError_elem = document.querySelector("#listaError");
    listaError_elem.innerHTML = "";
    errores.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e;
        listaError_elem.appendChild(li);
        console.log(e);
    });

    return errores.length == 0;
}


