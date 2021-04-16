"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movimientos_1 = __importDefault(require("./Movimientos"));
class Tabla {
    constructor(nombresNoTerminales, primeros, siguientes, auxProd, errores, terminales, simboloInicial) {
        this.movimientos = [];
        this.terminales = terminales;
        this.errores = errores;
        this.nombresNoTerminales = nombresNoTerminales;
        this.primeros = primeros;
        this.siguientes = siguientes;
        this.auxProducciones = auxProd;
        this.inicioSimbolo = simboloInicial;
        for (var a in this.auxProducciones) {
            this.movimientos.push(new Movimientos_1.default(this.auxProducciones[a].getPadre));
        }
    }
    get getSimboloInicial() {
        return this.inicioSimbolo;
    }
    get getTerminales() {
        return this.terminales;
    }
    get getErrores() {
        return this.errores;
    }
    get getMovimientos() {
        return this.movimientos;
    }
    get getPrimeros() {
        return this.primeros;
    }
    get getSiguientes() {
        return this.siguientes;
    }
    crearTabla() {
        for (var i in this.auxProducciones) {
            var prods = this.auxProducciones[i].getProducciones;
            for (var a in prods) {
                var subProd = prods[a].obtenerSubproduccion;
                if (subProd[0].getTipo == "T") {
                    let conQuien = subProd[0].getNombre;
                    let haciaDonde = subProd;
                    this.movimientos[i].agregarSubMovimiento(conQuien, haciaDonde);
                }
                else if (subProd[0].getTipo == "N") {
                    var primeros = this.primeros[i].getPrimerosTerminales;
                    var contieneLambda = primeros.includes('lambda');
                    let haciaDonde = subProd;
                    for (var b in primeros) {
                        let conQuien = primeros[b];
                        if (conQuien != "lambda") {
                            this.movimientos[i].agregarSubMovimiento(conQuien, haciaDonde);
                        }
                    }
                    if (contieneLambda) {
                        let siguientes = this.siguientes[i].getListadoSiguientes;
                        let haciaDonde = subProd;
                        for (var b in siguientes) {
                            let conQuien = siguientes[b];
                            this.movimientos[i].agregarSubMovimiento(conQuien, haciaDonde);
                        }
                    }
                }
            }
        }
    }
    mostrarinfo() {
        for (var i in this.movimientos) {
            this.movimientos[i].mostrarInfoMovimientos();
        }
    }
}
exports.default = Tabla;
//# sourceMappingURL=Tabla.js.map