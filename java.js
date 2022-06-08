var imagen = [];
imagen[0] = "imagenes/1.jpeg"
imagen[1] = "imagenes/2.jpeg"
imagen[2] = "imagenes/3.png"
imagen[3] = "imagenes/4.jpg"
 var i=0;

function Derecha(){
    i--
    if(i == 0){
        i = 5;
    }
    document.getElementById("carru").src = img[i];
}

function Derecha(){
    i++
    if(i == 6){
        i = 0;
    }
    document.getElementById("carru").src = img[i];
}