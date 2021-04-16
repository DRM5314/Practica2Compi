"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Primeros {
    constructor(padre) {
        this.listadoPrimerosTerminales = [];
        this.listadoPrimerosNoterminales = [];
        this.listadoPrimerosNoterminalesNombres = [];
        this.padre = padre;
    }
    agregar_A_PrimerosTerminales(dato) {
        this.listadoPrimerosTerminales.push(dato);
    }
    agregar_A_PrimerosTerminales_EnLista(dato) {
        for (var i in dato) {
            if (dato[i] != "lambda")
                this.agregar_A_PrimerosTerminales(dato[i]);
        }
    }
    get getPadre() {
        return this.padre;
    }
    agregarPrimerosNoTerminales(dato) {
        //console.log("Ingreso "+dato[0]+" "+dato[1]+" "+dato[2])
        this.listadoPrimerosNoterminales.push(dato);
        this.listadoPrimerosNoterminalesNombres.push(dato[0]);
    }
    get esAmbigua() {
        return this.repetidos(this.listadoPrimerosTerminales) || this.repetidos(this.listadoPrimerosNoterminalesNombres);
    }
    repetidos(arr) {
        return arr.some(function (v, i) { return arr.indexOf(v, i + 1) > -1; });
    }
    get getPrimerosTerminales() {
        return this.listadoPrimerosTerminales;
    }
    get getPrimerosNoTermianes() {
        return this.listadoPrimerosNoterminales;
    }
    mostrarInfoPrimerosTerminales() {
        console.log('los primeros de ' + this.padre + " son ");
        if (this.listadoPrimerosTerminales.length > 0) {
            for (var i in this.listadoPrimerosTerminales) {
                console.log(this.listadoPrimerosTerminales[i]);
            }
        }
        else {
            console.log('No tiene directos');
        }
    }
}
exports.default = Primeros;
//# sourceMappingURL=Primeros.js.map