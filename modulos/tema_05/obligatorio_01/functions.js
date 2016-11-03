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
    this.num = $('#' + id_caja);
    /**
     * Declaracion de botones
     */
    this.btns = {
        /**
         * objeto boton clear
         */
        clear: {'btn': $('#' + id_btn_clear), 'action': 'clear'},
        calcular: {'btn': $('#btn_eq'), 'action': 'calcular'},
        numericos: $('.num'),
        unarios: [
            {'btn': $('#btn_cuadrado'), action: 'cuadrado'},
            {'btn': $('#btn_inverso'), action: 'inverso'},
            {'btn': $('#btn_raiz'), action: 'raizCuadrada'},
            {'btn': $('#btn_entera'), action: 'parteEntera'},
            {'btn': $('#btn_potencia'), action: 'potencia'},
            {'btn':$('#btn_factorial'),action:'factorial'},
        ],
        binarios: [
            {'btn': $('#btn_suma'), action: 'sumar'},
            {'btn': $('#btn_resta'), action: 'restar'},
            {'btn': $('#btn_multiplica'), action: 'multiplicar'},
            {'btn': $('#btn_divide'), action: 'dividir'},
            {'btn': $('#btn_elevar'), action: 'elevar'},
        ],
        operandos: [
            {'btn':$('#btn_sumatorio'),action:'sumatorio'},
            {'btn':$('#btn_producto'),action:'producto'},
        ]

    }


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
        this.num.val('');
    }
    /**
     * Funcion para refactorizar operaciones basicas
     * @param {string} op
     * @param {Mixed} valor, valor calculado o vacio
     */
    this.operacion = function (op, valor) {
        this.acc = this.num.val();
        this.op = op;
        this.num.focus();
        this.num.val(valor);
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
        this.operacion('2', (Math.pow(+this.num.val(), 2)));
    }
    this.elevar = function () {
        this.operacion('^', '');
    }
    this.raizCuadrada = function () {
        this.operacion('√', (Math.sqrt(this.num.val())));
    }
    this.inverso = function () {
        this.operacion('#', (1 / this.num.val()));
    }
    this.parteEntera = function () {
        if (this.num.val() > 0) {
            this.num.val(Math.floor(this.num.val()));
        } else {
            this.num.val(-Math.ceil(this.num.val()));
        }
    }
    this.potencia = function () {
        this.operacion('2', (Math.pow(2, +this.num.val())));
    }
    this.factorial = function () {
        var n = this.num.val();
        for (var res = 1; n !== 0; n--){
         res = res * n;   
        }
        this.operacion('f', res);
    }
    this.sumatorio = function () {
        var lista = this.num.val().split(",");
        for (var i = 0, acc = 0; i < lista.length; i++) { 
              acc += +lista[i]; 
        }
        this.num.val(acc);
    }
    this.producto = function () {
        var lista = this.num.val().split(",");
        for (var i = 0, acc = 1; i < lista.length; i++) { 
            acc = acc * +lista[i]; 
        }
        this.num.val(acc);
    }
    /**
     * Funcion que realiza las opraciones de caluladora
     * @returns {Number}
     */
    this.calcular = function () {
        switch (this.op) {
            case "+":
                return (+this.acc + +this.num.val());
                break;
            case "-":
                return (+this.acc - +this.num.val());
                break;
            case "*":
                return  (+this.acc * +this.num.val());
                break;
            case "/":
                return (+this.acc / +this.num.val())
                break;
            case "2":
                return  (Math.pow(+this.num.val(), 2))
                break;
            case "^":
                return  (Math.pow(+this.acc, +this.num.val()))
                break;
            case "√":
                return  Math.sqrt(this.num.val());
                break;
            case "#":
                return 1 / this.num.val();
                break;
            case "p":
                return  (Math.pow(2, +this.num.val()))
                break;
            case "f":
                var n = this.num.val();
                for (var res = 1; n !== 0; n--) {
                    res = res * n;
                }
                return  res;
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
        this.btns.clear.btn.click(function () {
            that[that.btns.clear.action]();
        });

        that.clear();//Limpia primera vez
        /**
         * Agregamos los valores de numeros
         */
        for (var i = 0; i < this.btns.numericos.length; i++) {
            $(this.btns.numericos[i]).click(function () {
                that.num.val(that.num.val() + this.innerHTML)
            });
        }
        /**
         * Unarios
         */
        for (var i = 0; i < this.btns.unarios.length; i++) {
            /**
             * i es pasado como parametro
             */
            this.btns.unarios[i].btn.click(i, function (event) {
                /**
                 * Event.data recoge el parametro
                 */
                that[that.btns.unarios[event.data].action]();
            });
        }
        /**
         * Binarios
         */
        for (var i = 0; i < this.btns.binarios.length; i++) {
            /**
             * i es pasado como parametro
             */
            this.btns.binarios[i].btn.click(i, function (event) {
                /**
                 * Event.data recoge el parametro
                 */
                that[that.btns.binarios[event.data].action]();
            });
        }
        /**
         * Operandos
         */
        for (var i = 0; i < this.btns.operandos.length; i++) {
            /**
             * i es pasado como parametro
             */
            this.btns.operandos[i].btn.click(i, function (event) {
                /**
                 * Event.data recoge el parametro
                 */
                that[that.btns.operandos[event.data].action]();
            });
        }

        this.btns.calcular.btn.click(function () {
            that.num.val(that[that.btns.calcular.action]());
        });


    };
    /**
     * Invocamos a this
     */
    this.init();
};
var calculadora;
$(function () {
    calculadora = new CalculadoraClass('caja', 'btn_del');
});
