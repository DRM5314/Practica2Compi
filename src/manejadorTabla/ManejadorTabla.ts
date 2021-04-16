import Movimiento from '../manejadorAnalizador/Movimientos';
import Tabla from '../manejadorAnalizador/Tabla';
export default class ManejadorTabla{
    private tabla:Tabla;
    private ambigua:any = 0;
    constructor(tabla:Tabla){
        this.tabla = tabla;
    }
    get getTerminales():any[]{
        let retorno:any [] =[];
        for(var i in this.tabla.getTerminales){
            var terminal = this.tabla.getTerminales[i];
            retorno.push([terminal.getNombre,terminal.getExpresionRegular]);
        }
        return retorno;
    }
    get isAmbigua():boolean{
        if(this.ambigua>0){
            return true;
        }
        return false;
    }
    get agregarPS():any[]{        
        let datos:any []= [];
        datos.push(['----','Simbolo inicial :'+this.tabla.getSimboloInicial,'----'])
        for(var i in this.tabla.getPrimeros){
            let primeros = this.tabla.getPrimeros[i];
            let ambigua = primeros.esAmbigua;
            let siguientes = this.tabla.getSiguientes[i];
            let deQuien = primeros.getPadre+" ambigua: "+ambigua;
            if(ambigua){
                this.ambigua++;
            }
            datos.push([deQuien,primeros.getPrimerosTerminales.toString(),siguientes.getListadoSiguientes.toString()]);
        }
        return datos;
    }
    get getMovimientos():any[]{
        let datos:any[] = [];
        var movimientos = this.tabla.getMovimientos;        
        for(var i in movimientos){
            let padre = movimientos[i].getPadre;
            datos.push([padre," --- "," --- "]);
            let muevecon = movimientos[i].getSubMovimientos;
            for(var a in muevecon){
                let conQuien = muevecon[a].getConQuien;
                let haciaDonde = muevecon[a].getHaciaDonde.toString();
                datos.push([" -> ",conQuien,haciaDonde]);
            }
        }
        return datos;
    }
    get getErrores():any[]{
        return this.tabla.getErrores;
    }
}