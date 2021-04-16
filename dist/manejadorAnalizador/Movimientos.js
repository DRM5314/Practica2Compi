"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubMovimiento_1 = __importDefault(require("./SubMovimiento"));
class movimiento {
    constructor(padre) {
        this.movimientos = [];
        this.padre = padre;
    }
    agregarSubMovimiento(conQuien, haciaDonde) {
        this.movimientos.push(new SubMovimiento_1.default(conQuien, haciaDonde));
    }
    get getPadre() {
        return this.padre;
    }
    get getSubMovimientos() {
        return this.movimientos;
    }
    mostrarInfoMovimientos() {
        console.log('Movimiento de ' + this.padre + " Con: ");
        for (var i in this.movimientos) {
            console.log("Mov " + i);
            this.movimientos[i].mostrarInfoSubMovimiento();
        }
    }
}
exports.default = movimiento;
//# sourceMappingURL=Movimientos.js.map