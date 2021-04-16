import Primeros from './Primeros';
import Siguientes from './Siguientes';
import AuxiliarProduccion from './AuxiliarProduccion';
import Movientos from './Movimientos';
import Terminales from './Terminal';
export default class Tabla {
    private nombresTerminales: String[];
    private nombresNoTerminales: String[];
    private primeros: Primeros[];
    private siguientes: Siguientes[];
    private movimientos: Movientos[] = [];
    private auxProducciones: AuxiliarProduccion[];
    private errores:any[];
    private terminales:Terminales[];
    private inicioSimbolo:String;
    constructor(nombresNoTerminales: String[], primeros: Primeros[], siguientes: Siguientes[], auxProd: AuxiliarProduccion[],errores:any[],terminales:any[],simboloInicial:String) {
        this.terminales = terminales;
        this.errores = errores;    
        this.nombresNoTerminales = nombresNoTerminales;
        this.primeros = primeros;
        this.siguientes = siguientes;
        this.auxProducciones = auxProd;
        this.inicioSimbolo = simboloInicial;
        for (var a in this.auxProducciones) {
            this.movimientos.push(new Movientos(this.auxProducciones[a].getPadre));
        }
    }
    get getSimboloInicial():String{
        return this.inicioSimbolo;
    }
    get getTerminales():Terminales[]{
        return this.terminales;
    }
    get getErrores(){
        return this.errores;
    }
    get getMovimientos():Movientos[]{
        return this.movimientos;
    }
    get getPrimeros():Primeros[]{
        return this.primeros;
    }
    get getSiguientes():Siguientes[]{
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
                } else if (subProd[0].getTipo == "N") {
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
    mostrarinfo(){
        for(var i in this.movimientos){
            this.movimientos[i].mostrarInfoMovimientos();
        }
    }
}