"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Siguiente {
    constructor(padre) {
        this.listadoSiguientesTerminales = [];
        this.listadoSiguientesNoTerminales = [];
        this.listadoSiguienteDelSiguiente = [];
        this.padre = padre;
    }
    get getPadre() {
        return this.padre;
    }
    get getSiguienteDelSiguiente() {
        return this.listadoSiguienteDelSiguiente;
    }
    agregarSiguienteDelSiguiente(entrada) {
        this.listadoSiguienteDelSiguiente.push(entrada);
    }
    agregarSiguienteTerminal(dato) {
        if (dato != "lambda")
            this.listadoSiguientesTerminales.push(dato);
    }
    agregarSiguientesTerminales(datos) {
        for (var i in datos) {
            if (datos[i] != "lambda")
                this.listadoSiguientesTerminales.push(datos[i]);
        }
    }
    agregarSiguienteNoTerminal(dato) {
        this.listadoSiguientesNoTerminales.push(dato);
    }
    mostrarDatos() {
        console.log('los siguientes de ' + this.padre + " son ");
        if (this.listadoSiguientesTerminales.length > 0) {
            for (var i in this.listadoSiguientesTerminales) {
                console.log(this.listadoSiguientesTerminales[i]);
            }
        }
        else {
            console.log('No tiene siguientesDirectos directos');
        }
    }
    get getListadoSiguientes() {
        return this.listadoSiguientesTerminales;
    }
    get getListadoSiguientesNoTerminales() {
        return this.listadoSiguientesNoTerminales;
    }
}
exports.default = Siguiente;
//# sourceMappingURL=Siguientes.js.map