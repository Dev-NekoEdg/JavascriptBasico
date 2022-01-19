// 1. imagenes de billetes
// 2. persistenci en los billetes de la variable caja.
class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var caja = [];
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 20));

var dinero = 1000; //document.getElementById("dinero").value;

var divivion = 0;
var papeles = 0;

var entregado = [];

var boton = document.getElementById("btnExtraer");
boton.addEventListener("click", entregarDinero);


function entregarDinero() {
    var input = document.getElementById("dinero");
    dinero = parseInt(input.value);
    divivion = 0;
    papeles = 0;
    entregado = [];

    for (const [i, iterator] of caja.entries()) {
        if (dinero > 0) {
            div = Math.floor(dinero / iterator.valor)

            papeles = (div > iterator.cantidad ? iterator.cantidad : div);

            entregado.push(new Billete(iterator.valor, papeles));
            dinero -= (iterator.valor * papeles);
            caja[i].cantidad -= papeles;
        }
    }

    console.log("caja modificada");
    console.log(caja);
    if (dinero > 0) {
        console.log("no hay suficiente dinero para esa cantidad.");
        var texto = "<p style='color: red;'>no hay suficiente dinero para esa cantidad.</p>"
        //document.getElementById("resultado").append("<li>" + texto + "</li>");
        var ul = document.getElementById("resultado");
        var li = document.createElement("li");
        li.style("color: red");
        li.appendChild(document.createTextNode(texto));
        ul.appendChild(li);
    }
    else {
        console.log(entregado);
        for (const iterator of entregado) {
            if (iterator.valor > 0) {
                agregarItemLista(iterator.cantidad + "billetes de $" + iterator.valor);
            }
        }
    }
}

function agregarItemLista(texto) {
    var ul = document.getElementById("resultado");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(texto));
    ul.appendChild(li);
}


