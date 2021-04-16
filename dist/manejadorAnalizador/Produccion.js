"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubProduccion_1 = __importDefault(require("./SubProduccion"));
class produccion {
    constructor(datos) {
        this.datosProd = [];
        this.seHaceLambda = false;
        for (var i in datos) {
            this.datosProd.push(new SubProduccion_1.default(datos[i][1], datos[i][2], datos[i][0]));
        }
    }
    get obtenerSubproduccion() {
        return this.datosProd;
    }
    get isHaceLambda() {
        return this.seHaceLambda;
    }
    get getPrimerSubProduccion() {
        return this.datosProd[0];
    }
    mostrarDatos() {
        for (var i in this.datosProd) {
            var nombre = this.datosProd[i].getNombre;
            if (this.datosProd[i].getIsLambda) {
                console.log("   Tipo " + this.datosProd[i].getTipo + " Dato: lambda");
            }
            else {
                console.log("   Tipo " + this.datosProd[i].getTipo + " Dato: " + nombre);
            }
        }
    }
}
exports.default = produccion;
//# sourceMappingURL=Produccion.js.map