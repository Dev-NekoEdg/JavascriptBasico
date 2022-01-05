var canvas = document.getElementById("canvasMain");
var canvasContext = canvas.getContext("2d");
var rootMap = "images/tile.png";
var rootCow = "images/vaca.png";
var rootChicken = "images/pollo.png";
var rootPig = "images/cerdo.png";

var teclas = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40
};

var fondo = { url: "", isLoad: false };
var vaca = { url: "", isLoad: false };
var cerdo = { url: "", isLoad: false };

var xPollo = aleatorio(0, 420);
var yPollo = aleatorio(0, 420);
var movimiento = 10;
var pollo = { url: "", isLoad: false };
document.addEventListener("keydown", dibujarTeclado);


fondo.image = new Image(); // equivale a la etiqueta de img.
fondo.url = rootMap
fondo.image.src = rootMap;
fondo.image.addEventListener("load", cargarFondo);

vaca.image = new Image(); // equivale a la etiqueta de img.
vaca.url = rootCow;
vaca.image.src = rootCow;
vaca.image.addEventListener("load", cargarVacas);



pollo.image = new Image(); // equivale a la etiqueta de img.
pollo.url = rootChicken
pollo.image.src = rootChicken;
pollo.image.addEventListener("load", cargarPollo);


cerdo.image = new Image(); // equivale a la etiqueta de img.
cerdo.url = rootPig;
cerdo.image.src = rootPig;
cerdo.image.addEventListener("load", cargarCerdo);



// Pinta imagen en el canvas.
function dibujar() {
    if (fondo.isLoad) {
        canvasContext.drawImage(fondo.image, 0, 0);
    }
    if (vaca.isLoad) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);

        canvasContext.drawImage(vaca.image, x, y);
    }
    if (pollo.isLoad) {
        canvasContext.drawImage(pollo.image, xPollo, yPollo);
    }
    if (cerdo.isLoad) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);

        canvasContext.drawImage(cerdo.image, x, y);
    }

}


function cargarFondo() {

    fondo.isLoad = true;
    dibujar();
}

function cargarVacas() {
    vaca.isLoad = true;
    dibujar();
}

function cargarPollo() {
    pollo.isLoad = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.isLoad = true;
    dibujar();
}

//var z= aleatorio(10,20);
//document.write(z);

function aleatorio(min, max) {
    var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.Left:
            dibujar();
            xPollo= xPollo - movimiento;
            break;
        case teclas.Up:
            dibujar();
            yPollo= yPollo - movimiento;
            break;
        case teclas.Right:
            dibujar();
            xPollo= xPollo + movimiento;
            break;
        case teclas.Down:
            dibujar();
            yPollo= yPollo + movimiento;
            break;
    }
}

