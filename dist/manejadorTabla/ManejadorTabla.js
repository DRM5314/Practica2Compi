"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManejadorTabla {
    constructor(tabla) {
        this.ambigua = 0;
        this.tabla = tabla;
    }
    get getTerminales() {
        let retorno = [];
        for (var i in this.tabla.getTerminales) {
            var terminal = this.tabla.getTerminales[i];
            retorno.push([terminal.getNombre, terminal.getExpresionRegular]);
        }
        return retorno;
    }
    get isAmbigua() {
        if (this.ambigua > 0) {
            return true;
        }
        return false;
    }
    get agregarPS() {
        let datos = [];
        datos.push(['----', 'Simbolo inicial :' + this.tabla.getSimboloInicial, '----']);
        for (var i in this.tabla.getPrimeros) {
            let primeros = this.tabla.getPrimeros[i];
            let ambigua = primeros.esAmbigua;
            let siguientes = this.tabla.getSiguientes[i];
            let deQuien = primeros.getPadre + " ambigua: " + ambigua;
            if (ambigua) {
                this.ambigua++;
            }
            datos.push([deQuien, primeros.getPrimerosTerminales.toString(), siguientes.getListadoSiguientes.toString()]);
        }
        return datos;
    }
    get getMovimientos() {
        let datos = [];
        var movimientos = this.tabla.getMovimientos;
        for (var i in movimientos) {
            let padre = movimientos[i].getPadre;
            datos.push([padre, " --- ", " --- "]);
            let muevecon = movimientos[i].getSubMovimientos;
            for (var a in muevecon) {
                let conQuien = muevecon[a].getConQuien;
                let haciaDonde = muevecon[a].getHaciaDonde.toString();
                datos.push([" -> ", conQuien, haciaDonde]);
            }
        }
        return datos;
    }
    get getErrores() {
        return this.tabla.getErrores;
    }
}
exports.default = ManejadorTabla;
//# sourceMappingURL=ManejadorTabla.js.map