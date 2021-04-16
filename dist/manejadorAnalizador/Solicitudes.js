"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoTerminals_1 = __importDefault(require("./NoTerminals"));
const Terminal_1 = __importDefault(require("./Terminal"));
const Tabla_1 = __importDefault(require("./Tabla"));
class Solicitudes {
    constructor(listadoTerminales, listadoNoTerminales, listadoProducciones, listadoPosicionesNuevasProd, simboloInicial, listadoErrores) {
        this.listadoTerminales = [];
        this.listadoErrores = listadoErrores;
        this.noTerminal_1 = new NoTerminals_1.default(simboloInicial);
        this.simboloInicial = simboloInicial;
        for (var i in listadoTerminales) {
            this.agregarTerminal(listadoTerminales[i][0], listadoTerminales[i][1], listadoTerminales[i][2]);
        }
        for (var i in listadoNoTerminales) {
            this.agregarNoterminal(listadoNoTerminales[i]);
        }
        this.agregarProduccion(listadoProducciones, listadoPosicionesNuevasProd);
        this.noTerminal_1.agregarPrimeros();
        this.noTerminal_1.agregarSiguientes();
        //constructor(nombresNoTerminales: String[], primeros: Primeros[], siguientes: Siguientes[], auxProd: AuxiliarProduccion[]) {
        this.tabla = new Tabla_1.default(this.noTerminal_1.getNombres, this.noTerminal_1.getPrimeros, this.noTerminal_1.getSiguientes, this.noTerminal_1.getAuxProd, listadoErrores, this.listadoTerminales, simboloInicial);
        this.tabla.crearTabla();
    }
    borrarDatosMemoria() {
        this.noTerminal_1 = null;
        this.listadoTerminales = null;
        this.tabla = null;
        this.listadoErrores = null;
    }
    //errores.push(['Sintactico','dato: '+yytext,'Linea '+yylloc.first_line,'columna '+yylloc.first_column]);
    get getListadoErrores() {
        return this.listadoErrores;
    }
    get getTabla() {
        return this.tabla;
    }
    agregarNoterminal(nombre) {
        this.noTerminal_1.agregarNoTerminal(nombre);
    }
    agregarProduccion(listadoProd, listadoPosicionesNuevasProd) {
        this.noTerminal_1.agregarProducciones(listadoProd, listadoPosicionesNuevasProd);
    }
    agregarTerminal(nombre, expresion, cerradura) {
        this.listadoTerminales.push(new Terminal_1.default(nombre, expresion, cerradura));
    }
    mostrarInformacion() {
        for (var i in this.listadoTerminales) {
            console.log('Terminal #' + i + " Dato: " + this.listadoTerminales[i].getExpresionRegular);
        }
        this.noTerminal_1.mostrarDatos();
    }
}
module.exports.Solicitudes = Solicitudes;
//# sourceMappingURL=Solicitudes.js.map