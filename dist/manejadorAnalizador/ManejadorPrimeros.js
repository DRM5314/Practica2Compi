"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Primeros_1 = __importDefault(require("./Primeros"));
class ManejadorPrimeros {
    constructor(producciones, nombresNoTerminales) {
        this.listaPrimeros = [];
        this.producciones = producciones;
        this.nombresNoTerminales = nombresNoTerminales;
        this.agregarPadresPrimeros();
        this.calcularPrimerosFase1();
        this.calcularPrimerosFase2("d");
        /*
        console.log('nombres de no terminales');
        for(var i in nombresNoTerminales){
            console.log(nombresNoTerminales[i]);
        }
        console.log('Nombres padres producciones');
        for(var i in producciones){
            console.log(producciones[i].getPadre);
        }
        */
    }
    agregarPadresPrimeros() {
        for (var i in this.nombresNoTerminales) {
            this.listaPrimeros.push(new Primeros_1.default(this.nombresNoTerminales[i]));
        }
    }
    get getListadoPrimeros() {
        return this.listaPrimeros;
    }
    calcularPrimerosFase1() {
        for (var i in this.nombresNoTerminales) {
            var produccion = this.producciones[i].getProducciones;
            if (produccion.length > 0) {
                for (var a = 0; a < produccion.length; a++) {
                    var produccionAux = produccion[a];
                    if (produccionAux.obtenerSubproduccion[0].getTipo == "T") {
                        this.listaPrimeros[i].agregar_A_PrimerosTerminales(produccionAux.obtenerSubproduccion[0].getNombre);
                    }
                    else if (produccionAux.obtenerSubproduccion[0].getTipo == "N") {
                        var nombreAux = produccionAux.obtenerSubproduccion[0].getNombre;
                        var posNueva = this.nombresNoTerminales.indexOf(nombreAux);
                        var seHaceLambda = this.producciones[posNueva].isLambda;
                        //produccionAux.obtenerSubproduccion[0].getIsLambda
                        if (seHaceLambda) {
                            this.listaPrimeros[i].agregar_A_PrimerosTerminales("lambda");
                            //console.log('prod anterior se hace lambda')
                        }
                        if (produccionAux.obtenerSubproduccion[0].getNombre != this.nombresNoTerminales[i]) {
                            //console.log('va agregar de fase 1 primeros no terminales de' + this.nombresNoTerminales[i])
                            this.listaPrimeros[i].agregarPrimerosNoTerminales([produccionAux.obtenerSubproduccion[0].getNombre, seHaceLambda, a]);
                        }
                    }
                }
            }
            else {
                //no se usa ese no terminal en las producciones
            }
        }
    }
    calcularPrimerosFase2(ved) {
        //console.log('Va a entrar a fase 2 holi');
        for (var i in this.nombresNoTerminales) {
            var listaPrimerosNoTerminales = this.listaPrimeros[i].getPrimerosNoTermianes;
            for (var a in listaPrimerosNoTerminales) {
                var pos = this.nombresNoTerminales.indexOf(listaPrimerosNoTerminales[a][0]);
                //console.log("Va a analizar fase 2 de " + listaPrimerosNoTerminales[a][0] + " " + listaPrimerosNoTerminales[a][1] + " " + listaPrimerosNoTerminales[a][2]);
                if (listaPrimerosNoTerminales[a][1] == false) {
                    this.listaPrimeros[i].agregar_A_PrimerosTerminales_EnLista(this.listaPrimeros[pos].getPrimerosTerminales);
                }
                else {
                    var pos1 = listaPrimerosNoTerminales[a][2];
                    var produccionesAux = this.producciones[i].getProducciones[pos1].obtenerSubproduccion;
                    var limite = produccionesAux.length;
                    var posa = this.nombresNoTerminales.indexOf(listaPrimerosNoTerminales[a][0]);
                    if (i != (posa + ""))
                        this.listaPrimeros[i].agregar_A_PrimerosTerminales_EnLista(this.listaPrimeros[posa].getPrimerosTerminales);
                    if (limite > 1) {
                        for (var b = 1; b < limite; b++) {
                            //console.log(produccionesAux[b].getTipo + " " + produccionesAux[b].getNombre + " " + produccionesAux[b].getIsLambda);
                            if (produccionesAux[b].getTipo == "T") {
                                if (this.nombresNoTerminales[i] != produccionesAux[b].getNombre) {
                                    this.listaPrimeros[i].agregar_A_PrimerosTerminales(produccionesAux[b].getNombre);
                                }
                            }
                            else if (produccionesAux[b].getTipo == "N" && !produccionesAux[b].getIsLambda) {
                                var pos3 = this.nombresNoTerminales.indexOf(produccionesAux[b].getNombre);
                                this.listaPrimeros[i].agregar_A_PrimerosTerminales_EnLista(this.listaPrimeros[pos3].getPrimerosTerminales);
                            }
                            else if (produccionesAux[b].getIsLambda) {
                                var pos4 = this.nombresNoTerminales.indexOf(produccionesAux[b].getNombre);
                                if ((pos4 + "") != i)
                                    this.listaPrimeros[i].agregar_A_PrimerosTerminales_EnLista(this.listaPrimeros[pos4].getPrimerosTerminales);
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.default = ManejadorPrimeros;
//# sourceMappingURL=ManejadorPrimeros.js.map