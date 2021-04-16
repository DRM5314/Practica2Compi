"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuxiliarProduccion_1 = __importDefault(require("./AuxiliarProduccion"));
const ManejadorSiguientes_1 = __importDefault(require("./ManejadorSiguientes"));
const ManejadorPrimeros_1 = __importDefault(require("./ManejadorPrimeros"));
class NoTerminals {
    constructor(simboloInicial) {
        this.nombres = [];
        this.auxiliaarProduccion = [];
        this.simbiloIicial = simboloInicial;
    }
    agregarNoTerminal(nombre) {
        if (!this.nombres.includes(nombre)) {
            this.nombres.push(nombre);
            this.auxiliaarProduccion.push(new AuxiliarProduccion_1.default(nombre));
        }
    }
    get getNombres() {
        return this.nombres;
    }
    get getAuxProd() {
        return this.auxiliaarProduccion;
    }
    agregarProducciones(prod, posNuevasProd) {
        var contador = 0;
        /*
        for(var e in prod){
            console.log('Derecho: '+prod[e][0]+' Tipo: '+prod[e][1]+' dato: '+prod[e][2]);
            if(e==posNuevasProd[contador]){
                contador++;
                console.log('Nueva produccion');
            }
        }
        */
        let agrupador = [];
        for (var i in prod) {
            agrupador.push(prod[i]);
            var nombreAux = prod[i][0];
            if (posNuevasProd[contador] == i) {
                //console.log('Agrega prod de '+nombreAux+" con "+agrupador.length+" Prods")
                var pos = this.nombres.indexOf(nombreAux);
                this.auxiliaarProduccion[pos].agregarProduccionSubproduccion(agrupador);
                agrupador = [];
                contador++;
            }
        }
    }
    agregarPrimeros() {
        this.primeros = new ManejadorPrimeros_1.default(this.auxiliaarProduccion, this.nombres).getListadoPrimeros;
        /*for(var i in this.auxiliaarProduccion){
            var listaoPrimerosNoterminales = this.auxiliaarProduccion[i].getPrimeros.getPrimerosNoTermianes;
            console.log('Va a agrgar primeros segunda fase y trae '+listaoPrimerosNoterminales.length);
            for(var a in listaoPrimerosNoterminales){
                console.log('esta analizando en'+listaoPrimerosNoterminales[a]+' agregar segunda fase')
                var posNoterminal = this.nombres.indexOf(listaoPrimerosNoterminales[a]);
                var terminales = this.auxiliaarProduccion[posNoterminal].getPrimeros.getPrimerosTerminales;
                this.auxiliaarProduccion[i].agregarPrimerosSegundaFase(terminales);
            }
        }
        */
    }
    get getPrimeros() {
        return this.primeros;
    }
    get getSiguientes() {
        return this.siguientes;
    }
    agregarSiguientes() {
        this.siguientes = new ManejadorSiguientes_1.default(this.nombres, this.auxiliaarProduccion, this.primeros, this.simbiloIicial).getSiguientes;
    }
    mostrarDatos() {
        console.log('Simbolo inicial es ' + this.simbiloIicial);
        for (var i in this.nombres) {
            //console.log('El no terminal: '+this.nombres[i]+" isLambda "+this.auxiliaarProduccion[i].isLambda+' Tiene '+this.auxiliaarProduccion[i].getProducciones.length+" Son");
            //this.auxiliaarProduccion[i].mostrarProducciones();            
            this.primeros[i].mostrarInfoPrimerosTerminales();
            //console.log('Es ambigua: '+this.auxiliaarProduccion[i].getPrimeros.esAmbigua);            
            this.siguientes[i].mostrarDatos();
        }
    }
}
exports.default = NoTerminals;
//# sourceMappingURL=NoTerminals.js.map