/**
 * Archivo de funciones javascript
 * @author Gastón Nina
 */

/**
 * Variable para el campo tipo fecha y Hora
 * @type Date
 */
var d;
/**
 * Variable para manejo de mese
 * @type Array
 */
var meses = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
};



/**
 * La funcion retorna la hora actual
 * @returns {string}
 */
function lectura() {
    d = new Date();
    var cad = "<span><b>"+msj+"</b>, la fecha y hora exacta son: </span><br>";
    cad += d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear() + "<br>";

    cad += (d.getHours() < 10) ? ("0" + d.getHours()) : (d.getHours());
    cad += ":";
    cad += (d.getMinutes() < 10) ? ("0" + d.getMinutes()) : (d.getMinutes());
    cad += ":";
    cad += (d.getSeconds() < 10) ? ("0" + d.getSeconds()) : (d.getSeconds());

    document.getElementById('fecha_lectura').innerHTML = cad;
}

/**
 * Funciones propias de Miriadax 
 **/
var fecha = new Date(),
        msj,
        /**
         * Variable para uso de Contenido h2
         * @type string
         */
        h2 = '';


if (fecha.getHours() < 7) {
    msj = "Buenas noches";
} else if (fecha.getHours() < 12) {
    msj = "Buenos días";
} else if (fecha.getHours() < 21) {
    msj = "Buenas tardes";
} else {
    msj = "Buenas noches";
}

document.getElementById("h1").innerHTML = msj+"!";
document.getElementById("fecha").innerHTML = fecha;

h2 += '<b>1 - innerHTML del elemento id="h2": </b>' + document.getElementById("h2").innerHTML+'<br/>';
h2 += '<b>2 - outerHTML de elemento id="h1": </b>' + document.getElementById("h1").outerHTML.replace(/</g, "&lt;")+'<br/>';
h2 += '<b>3 - location.href: </b>' + location.href+'<br/>';
h2 += '<b>4 - location: </b>' + location+'<br/>';
h2 += '<b>5 - screen.width/screen.height: </b>' + screen.width + "px / " + screen.height + "px."

document.getElementById("h2").innerHTML=h2;

setInterval(function () {
    lectura()
}, 1000);
