"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produccion_1 = __importDefault(require("./Produccion"));
const Primeros_1 = __importDefault(require("./Primeros"));
class AuxiliarProduccion {
    constructor(padre) {
        this.produccion_1 = [];
        this.seHaceLambda = false;
        this.padre = padre;
        this.primeros = new Primeros_1.default(padre);
    }
    get getPosTerminales() {
        var posTerminales = [];
        for (var i in this.produccion_1) {
            if (this.produccion_1[i].getPrimerSubProduccion.getTipo == "T") {
                posTerminales.push(i);
            }
        }
        return posTerminales;
    }
    get isLambda() {
        return this.seHaceLambda;
    }
    get getPadre() {
        return this.padre;
    }
    agregarProduccionSubproduccion(listado) {
        var listadoAux = [];
        var contador = 0;
        for (var a in listado) {
            if (!(listado[a][1] == "separador")) {
                listadoAux.push(listado[a]);
                if ((listado[a][2] == "lambda"))
                    contador++;
            }
            else {
                this.produccion_1.push(new Produccion_1.default(listadoAux));
                listadoAux = [];
            }
        }
        this.produccion_1.push(new Produccion_1.default(listadoAux));
        if (contador > 0)
            this.seHaceLambda = true;
    }
    agregarPrimeros(a) {
        /*for (var i in this.produccion_1) {
            var primerSubprod = this.produccion_1[i].getPrimerSubProduccion;
            if (primerSubprod.getTipo == "T") this.primeros.agregarPrimerosTerminales(primerSubprod.getNombre);
            else {
                var auxPrimerosLabda = [];
                if (primerSubprod.getIsLambda) {
                    for (var a in this.produccion_1[i].obtenerSubproduccion) {
                        var prodAux = this.produccion_1[i].obtenerSubproduccion[a];
                        if(prodAux.getIsLambda){
                            auxPrimerosLabda.push(prodAux);
                        }else{
                            if(prodAux.getTipo=="T"){
                                this.primeros.agregarPrimerosTerminales(primerSubprod.getNombre);
                            }else {
                                for(var b in auxPrimerosLabda){
                                    this.primeros.agregarPrimerosNoTerminales([auxPrimerosLabda[b].getNombre, auxPrimerosLabda[b].getIsLambda]);
                                    auxPrimerosLabda = [];
                                }
                            }
                        }
                    }
                } else {
                    this.primeros.agregarPrimerosNoTerminales([primerSubprod.getNombre,primerSubprod.getIsLambda]);
                }
            }
        }
        */
    }
    /*
    agregarPrimerosSegundaFase(listadoPrimeros: any[]) {
        for (var i in listadoPrimeros) {
            this.primeros.agregarPrimerosTerminales(listadoPrimeros[i]);
        }
    }
    */
    get getProducciones() {
        return this.produccion_1;
    }
    get getPrimeros() {
        return this.primeros;
    }
    mostrarProducciones() {
        for (var i in this.produccion_1) {
            console.log("Produccion# " + i);
            this.produccion_1[i].mostrarDatos();
        }
    }
}
exports.default = AuxiliarProduccion;
//# sourceMappingURL=AuxiliarProduccion.js.map