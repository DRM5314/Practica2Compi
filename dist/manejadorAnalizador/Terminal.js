"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class terminal {
    constructor(nombre, expresion, cerradura) {
        this.nombreTerminal = nombre;
        this.expresionRegular = expresion;
        this.cerradura = cerradura;
    }
    get getNombre() {
        return this.nombreTerminal;
    }
    get getExpresionRegular() {
        return this.expresionRegular;
    }
    get getCerradura() {
        return this.cerradura;
    }
}
exports.default = terminal;
//# sourceMappingURL=Terminal.js.map