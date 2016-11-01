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
    var cad = "<span><b>" + msj + "</b>, la fecha y hora exacta son: </span><br>";
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
        msj;

if (fecha.getHours() < 7) {
    msj = "Buenas noches";
} else if (fecha.getHours() < 12) {
    msj = "Buenos días";
} else if (fecha.getHours() < 21) {
    msj = "Buenas tardes";
} else {
    msj = "Buenas noches";
}

document.getElementById("h1").innerHTML = msj + "";



setInterval(function () {
    lectura()
}, 1000);

/**
 * Clase de tipo calculadora
 * @param {string} id_caja
 * @returns {CalculadoraClass}
 */
var CalculadoraClass = function (id_caja, id_btn_clear) {
    /**
     * Ojeto que almacena la caja de texto
     */
    this.num = document.getElementById(id_caja);
    /**
     * objeto boton clear
     */
    this.btnClear = document.getElementById(id_btn_clear);
    /**
     * Objetos de botones numericos
     */
    this.btnsNumber = document.getElementsByClassName("num");

    /**
     * Objeto boton suma
     */
    this.btnSuma = document.getElementById('btn_suma');
    /**
     * Objeto boton resta
     */
    this.btnResta = document.getElementById('btn_resta');
    /**
     * Objeto boton multiplica
     */
    this.btnMultiplica = document.getElementById('btn_multiplica');
    /**
     * Objeto boton divide
     */
    this.btnDivide = document.getElementById('btn_divide');
    /**
     * Objeto boton inverso
     */
    this.btnInverso = document.getElementById('btn_inverso');
    /**
     * Objeto boton cuadrado
     */
    this.btnCuadrado = document.getElementById('btn_cuadrado');
    /**
     * Objeto boton raiz
     */
    this.btnRaiz = document.getElementById('btn_raiz');
    /**
     * Objeto boton elevr
     */
    this.btnElevar = document.getElementById('btn_elevar');
    /**
     * Objeto boton parte entera
     */
    this.btnEntera = document.getElementById('btn_entera');
    /**
     * Objeto boton calcular o Igual
     */
    this.btnCalcular = document.getElementById('btn_eq');

    /**
     * Variable para los operadores
     */
    this.op = '';
    /**
     * Auxiliar
     */
    this.acc = 0;
    /**
     * Funcion que ayuda en el limpiado de caja
     */
    this.clear = function () {
        this.num.value = '';
    }
    /**
     * Funcion para refactorizar operaciones basicas
     * @param {string} op
     * @param {Mixed} valor, valor calculado o vacio
     */
    this.operacion = function (op, valor) {
        this.acc = this.num.value;
        this.op = op;
        this.num.focus();
        this.num.value = valor;
    }
    this.sumar = function () {
        this.operacion('+', '');
    }
    this.restar = function () {
        this.operacion('-', '');
    }
    this.multiplicar = function () {
        this.operacion('*', '');
    }
    this.dividir = function () {
        this.operacion('/', '');
    }
    this.cuadrado = function () {
        this.operacion('2', (Math.pow(+this.num.value, 2)));
    }
    this.elevar = function () {
        this.operacion('^', '');
    }
    this.raizCuadrada = function () {
        this.operacion('√', (Math.sqrt(this.num.value)));
    }
    this.inverso = function () {
        this.operacion('#', (1 / this.num.value));
    }
    this.parteEntera = function () {
        if (this.num.value > 0) {
            this.num.value = Math.floor(this.num.value);
        } else {
            this.num.value = -Math.ceil(this.num.value);
        }
    }
    /**
     * Funcion que realiza las opraciones de caluladora
     * @returns {Number}
     */
    this.calcular = function () {
        switch (this.op) {
            case "+":
                return (+this.acc + +this.num.value);
                break;
            case "-":
                return (+this.acc - +this.num.value);
                break;
            case "*":
                return  (+this.acc * +this.num.value);
                break;
            case "/":
                return (+this.acc / +this.num.value)
                break;
            case "2":
                return  (Math.pow(+this.num.value, 2))
                break;
            case "^":
                return  (Math.pow(+this.acc, +this.num.value))
                break;
            case "√":
                return  Math.sqrt(this.num.value);
                break;
            case "#":
                return 1 / this.num.value;
                break;
        }
    }

    this.init = function () {
        /**
         * Se almacena en that para acceder a ellos dentro funciones internas
         * @type CalculadoraClass
         */
        var that = this;
        /**
         * Agregamos evento click al boton clear
         */
        this.btnClear.addEventListener('click', function () {
            that.clear();
        }, false);
        that.clear();//Limpia primera vez

        this.btnSuma.addEventListener('click', function () {
            that.sumar();
        }, false);
        this.btnResta.addEventListener('click', function () {
            that.restar();
        }, false);
        this.btnMultiplica.addEventListener('click', function () {
            that.multiplicar();
        }, false);
        this.btnDivide.addEventListener('click', function () {
            that.dividir();
        }, false);
        this.btnInverso.addEventListener('click', function () {
            that.inverso();
        }, false);
        this.btnCuadrado.addEventListener('click', function () {
            that.cuadrado();
        }, false);
        this.btnRaiz.addEventListener('click', function () {
            that.raizCuadrada();
        }, false);
        this.btnElevar.addEventListener('click', function () {
            that.elevar();
        }, false);
        this.btnEntera.addEventListener('click', function () {
            that.parteEntera();
        }, false);
        this.btnCalcular.addEventListener('click', function () {
            that.num.value = that.calcular();
        }, false);

        for (var i = 0; i < this.btnsNumber.length; i++) {
            this.btnsNumber[i].addEventListener('click', function () {
                /**
                 * Inserta el valor del boton a caja
                 */
                that.num.value += this.innerHTML;
                that.num.focus();
            }, false);
        }
    };
    /**
     * Invocamos a this
     */
    this.init();
};

var calculadora = new CalculadoraClass('caja', 'btn_del');
