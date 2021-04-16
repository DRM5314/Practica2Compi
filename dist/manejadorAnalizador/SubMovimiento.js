"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class subMovimiento {
    constructor(conQuien, haciaDonde) {
        this.conquien = conQuien;
        this.haciaDonde = haciaDonde;
    }
    get getHaciaDonde() {
        let retorno = [];
        for (var i in this.haciaDonde) {
            let lmabda = this.haciaDonde[i].getLambda;
            if (lmabda != "lambda") {
                retorno.push(lmabda);
            }
            else {
                retorno.push("labmda");
            }
        }
        return retorno;
    }
    get getConQuien() {
        return this.conquien;
    }
    mostrarInfoSubMovimiento() {
        console.log('mueve con ' + this.conquien + " hacia ");
        for (var a in this.haciaDonde) {
            let lmabda = this.haciaDonde[a].getLambda;
            if (lmabda != "lambda") {
                console.log(this.haciaDonde[a].getNombre);
            }
            else {
                console.log('lambda');
            }
        }
    }
}
exports.default = subMovimiento;
//# sourceMappingURL=SubMovimiento.js.map