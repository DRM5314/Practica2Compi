"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Siguientes_1 = __importDefault(require("./Siguientes"));
class ManejadorSiguientes {
    constructor(nombres, auxiliaresProd, primeros, simboloInicial) {
        this.listadoSiguientes = [];
        this.nombresNoTerminales = nombres;
        this.producciones = auxiliaresProd;
        this.primeros = primeros;
        this.simboloInicial = simboloInicial;
        this.agregarPadresSiguientes();
        this.calcularSiguientes();
    }
    get getSiguientes() {
        return this.listadoSiguientes;
    }
    agregarPadresSiguientes() {
        for (var i in this.nombresNoTerminales) {
            this.listadoSiguientes.push(new Siguientes_1.default(this.nombresNoTerminales[i]));
        }
    }
    calcularSiguientesFase2() {
        for (var i in this.listadoSiguientes) {
            var listadoSiguientesNoterminales2 = this.listadoSiguientes[i].getListadoSiguientesNoTerminales;
            for (var a in listadoSiguientesNoterminales2) {
                console.log('va a agregar primeros de ' + listadoSiguientesNoterminales2[a] + " a siguiente de " + this.listadoSiguientes[i].getPadre);
                var pos = this.nombresNoTerminales.indexOf(listadoSiguientesNoterminales2[a]);
                this.listadoSiguientes[i].agregarSiguientesTerminales(this.primeros[pos].getPrimerosTerminales);
            }
            for (var a in this.listadoSiguientes[i].getSiguienteDelSiguiente) {
                console.log('           agrega siguiente del siguiente para ' + this.nombresNoTerminales[i] + ' siguiente de ' + this.listadoSiguientes[i].getSiguienteDelSiguiente[a]);
                var pos1 = this.nombresNoTerminales.indexOf(this.listadoSiguientes[i].getSiguienteDelSiguiente[a]);
                this.listadoSiguientes[i].agregarSiguientesTerminales(this.listadoSiguientes[pos1].getListadoSiguientes);
            }
        }
    }
    isLambda(nombre) {
        let retorno = false;
        var pos = this.nombresNoTerminales.indexOf(nombre);
        if (pos >= 0)
            retorno = this.producciones[pos].isLambda;
        console.log('analiza si es lamda para ' + nombre + " retorno " + retorno);
        return retorno;
    }
    calcularSiguientes() {
        if (this.nombresNoTerminales.includes(this.simboloInicial)) {
            var posNoterminal1 = this.nombresNoTerminales.indexOf(this.simboloInicial);
            this.listadoSiguientes[posNoterminal1].agregarSiguienteTerminal("$");
        }
        //auxprod        
        for (var a in this.producciones) {
            //producciones internas
            for (var b in this.producciones[a].getProducciones) {
                //sub produccion
                var subProd = this.producciones[a].getProducciones[b].obtenerSubproduccion;
                for (var c = 0; c < subProd.length; c++) {
                    //subProd[c].getLambda!="lambda"
                    var aux = c + 1;
                    if (aux == subProd.length && subProd[c].getTipo == "N") {
                        console.log('   Esta en ultima pos y es  ' + subProd[c].getNombre + " y agrega siguientes de " + this.nombresNoTerminales[b]);
                        var posUltimo = this.nombresNoTerminales.indexOf(subProd[c].getNombre);
                        this.listadoSiguientes[posUltimo].agregarSiguienteDelSiguiente(this.nombresNoTerminales[b]);
                    }
                    if (subProd[c].getTipo == "N" && !this.isLambda(subProd[c].getNombre)) {
                        var posUltimo = this.nombresNoTerminales.indexOf(subProd[c].getNombre);
                        if (aux == subProd.length) {
                            //console.log('2 ya esta en el limite el siguiente es no terminal y no es lambda agrega sus primeros de '+subProd[aux].getNombre);
                            //this.listadoSiguientes[posUltimo].agregarSiguienteDelSiguiente(subProd[aux].getNombre);
                        }
                        else if (aux < subProd.length) {
                            if (subProd[aux].getTipo == "T") {
                                console.log('el siguiente es terminal lo agrega y es ' + subProd[aux].getNombre);
                                this.listadoSiguientes[posUltimo].agregarSiguienteTerminal(subProd[aux].getNombre);
                            }
                            else if (subProd[aux].getTipo == "N") {
                                //subProd[aux].getLambda!="lambda"
                                if (!this.isLambda(subProd[aux].getNombre)) {
                                    console.log('el siguiente es no terminal y no es lambda agrega sus primeros de ' + subProd[aux].getNombre);
                                    var nombrePrimerosNoTerminalNoLambda = this.nombresNoTerminales.indexOf(subProd[aux].getNombre);
                                    this.listadoSiguientes[posUltimo].agregarSiguientesTerminales(this.primeros[nombrePrimerosNoTerminalNoLambda].getPrimerosTerminales);
                                }
                                else {
                                    console.log('La prod siguiente de ' + subProd[c].getNombre + " se hace lambda y va hacer");
                                    for (let d = aux; d < subProd.length; d++) {
                                        //subProd[d].getLambda!="lambda"
                                        if (!this.isLambda(subProd[d].getNombre)) {
                                            if (subProd[d].getTipo == "T") {
                                                console.log('el siguiente es terminal lo agrega y es ' + subProd[d].getNombre);
                                                this.listadoSiguientes[posUltimo].agregarSiguienteTerminal(subProd[d].getNombre);
                                            }
                                            else if (subProd[d].getTipo == "N") {
                                                console.log('el siguiente es no terminal y no es lambda agrega sus primeros de ' + subProd[d].getNombre);
                                                var pos1 = this.nombresNoTerminales.indexOf(subProd[d].getNombre);
                                                this.listadoSiguientes[posUltimo].agregarSiguientesTerminales(this.primeros[pos1].getPrimerosTerminales);
                                            }
                                        }
                                        else {
                                            console.log('agregar a cola de primeros de ' + subProd[d].getNombre);
                                            this.listadoSiguientes[posUltimo].agregarSiguienteNoTerminal(subProd[d].getNombre);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        //if(subProd[c].getTipo == "N" && !this.isLambda(subProd[c].getNombre)){
                        if (subProd[c].getTipo == "N" && subProd[c].getLambda != "lambda") {
                            var aux = c + 1;
                            var posUltimo = this.nombresNoTerminales.indexOf(subProd[c].getNombre);
                            if (aux == subProd.length) {
                                console.log('1 ya esta en el limite el siguiente es no terminal y no es lambda agrega sus primeros de ' + subProd[c].getNombre);
                                this.listadoSiguientes[posUltimo].agregarSiguienteDelSiguiente(subProd[c].getNombre);
                            }
                            else if (aux < subProd.length) {
                                if (subProd[aux].getTipo == "T") {
                                    console.log('el siguiente es terminal lo agrega y es ' + subProd[aux].getNombre);
                                    this.listadoSiguientes[posUltimo].agregarSiguienteTerminal(subProd[aux].getNombre);
                                }
                                else if (subProd[aux].getTipo == "N") {
                                    //!this.isLambda(subProd[aux].getNombre)
                                    if (subProd[aux].getLambda != "lambda") {
                                        console.log('el siguiente es no terminal y no es lambda agrega sus primeros de ' + subProd[aux].getNombre);
                                        var nombrePrimerosNoTerminalNoLambda = this.nombresNoTerminales.indexOf(subProd[aux].getNombre);
                                        this.listadoSiguientes[posUltimo].agregarSiguientesTerminales(this.primeros[nombrePrimerosNoTerminalNoLambda].getPrimerosTerminales);
                                    }
                                    else {
                                        console.log('La prod siguiente de ' + subProd[c].getNombre + " se hace lambda y va hacer");
                                        for (let d = aux; d < subProd.length; d++) {
                                            //!this.isLambda(subProd[d].getNombre)
                                            if (subProd[d].getLambda != "lambda") {
                                                if (subProd[d].getTipo == "T") {
                                                    console.log('el siguiente es terminal lo agrega y es ' + subProd[d].getNombre);
                                                    this.listadoSiguientes[posUltimo].agregarSiguienteTerminal(subProd[d].getNombre);
                                                }
                                                else if (subProd[d].getTipo == "N") {
                                                    console.log('el siguiente es no terminal y no es lambda agrega sus primeros de ' + subProd[d].getNombre);
                                                    var pos1 = this.nombresNoTerminales.indexOf(subProd[d].getNombre);
                                                    this.listadoSiguientes[posUltimo].agregarSiguientesTerminales(this.primeros[pos1].getPrimerosTerminales);
                                                }
                                            }
                                            else {
                                                console.log('agregar a cola de primeros de ' + subProd[d].getNombre);
                                                this.listadoSiguientes[posUltimo].agregarSiguienteNoTerminal(subProd[d].getNombre);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.calcularSiguientesFase2();
        /*
        for (var i in this.nombresNoTerminales){
            for(var a in this.producciones[i].getProducciones){
                var limite = this.producciones[i].getProducciones[a].obtenerSubproduccion.length;
                for(var b = 0;b<limite;b++){
                    var aux = b+1;
                    var tipo = this.producciones[i].getProducciones[a].obtenerSubproduccion[b].getTipo;
                    var nombre = this.producciones[i].getProducciones[a].obtenerSubproduccion[b].getNombre;
                    var posNoterminal = this.nombresNoTerminales.indexOf(nombre);
                    if(aux == limite && tipo == "N"){
                        this.listadoSiguientes[posNoterminal].agregarSiguientes(this.primeros[posNoterminal].getPrimerosTerminales);
                    }
                    if(tipo == "N" && aux<limite){
                        var tipo1 = this.producciones[i].getProducciones[a].obtenerSubproduccion[aux].getTipo;
                        var nombre1 = this.producciones[i].getProducciones[a].obtenerSubproduccion[aux].getNombre;
                        if(tipo1 == "T"){
                            this.listadoSiguientes[posNoterminal].agregarSiguiente(nombre1);
                        }else if(tipo1 == "N"){
                            this.listadoSiguientes[posNoterminal].agregarSiguientes(this.primeros[posNoterminal].getPrimerosTerminales);
                        }
                    }
                }
            }
        }
        
        /*
        
        if((b+1)==limite && this.producciones[i].getProducciones[a].obtenerSubproduccion[b].getTipo=="N"){
                        this.listadoSiguientesNoTerminales.push(this.producciones[i].getProducciones[a].obtenerSubproduccion[b+1].getNombre);
                    }
        
        for (var i in this.producciones) {
            for (var a = 0; a < this.producciones[i].obtenerSubproduccion.length; a++) {
                if (this.producciones[i].obtenerSubproduccion[a].getTipo == "N") {
                    if (this.producciones[i].obtenerSubproduccion[a].getNombre == this.padre) {
                        //error aqui, no se declara
                        this.listadoSiguientes.push(new Siguiente(this.padre));
                        if ((a + 1) < (this.producciones[i].obtenerSubproduccion.length)) {
                            if (this.producciones[i].obtenerSubproduccion[a + 1].getTipo == "T") {
                                this.listadoSiguientes.agregarSiguiente(this.producciones[i].obtenerSubproduccion[a + 1].getNombre);
                            }
                        }
                    }
                }
            }
        }
        */
    }
    mostrarDatos() {
        for (var i in this.listadoSiguientes) {
            console.log('Los siguientes de ' + this.listadoSiguientes[i].getPadre + ' Son');
            this.listadoSiguientes[i].mostrarDatos();
        }
    }
}
exports.default = ManejadorSiguientes;
//# sourceMappingURL=ManejadorSiguientes.js.map