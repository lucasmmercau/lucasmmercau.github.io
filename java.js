console.log("scrip cargada")

var imagen = [];
imagen[0] = "./imagenes/1.jpeg"
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
//formulario
