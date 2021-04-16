"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubProduccion {
    constructor(tipo, nombre, padreLambda) {
        this.lambda = "no";
        this.tipo = tipo;
        this.nombre = nombre;
        this.lambda = nombre;
        var aux = false;
        if (nombre == "lambda") {
            this.nombre = padreLambda;
            //console.log('Agrego lambda de prod');
            aux = true;
        }
        this.tieneLambda = aux;
    }
    get getLambda() {
        return this.lambda;
    }
    get getIsLambda() {
        return this.tieneLambda;
    }
    get getNombre() {
        return this.nombre;
    }
    get getTipo() {
        return this.tipo;
    }
}
exports.default = SubProduccion;
//# sourceMappingURL=SubProduccion.js.map