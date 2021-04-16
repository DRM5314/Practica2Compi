import SubMovimiento from './SubMovimiento';
import SubProduccion from './SubProduccion';
export default class movimiento{
    private padre:String;
    private movimientos:SubMovimiento[] = [];
    constructor(padre:String){
        this.padre = padre;
    }
    agregarSubMovimiento(conQuien:String,haciaDonde:SubProduccion[]){
        this.movimientos.push(new SubMovimiento(conQuien,haciaDonde))
    }
    get getPadre():String{
        return this.padre;
    }
    get getSubMovimientos():SubMovimiento[]{
        return this.movimientos;
    }
    mostrarInfoMovimientos(){
        console.log('Movimiento de '+this.padre+" Con: ")
        for(var i in this.movimientos){
            console.log("Mov "+i);
            this.movimientos[i].mostrarInfoSubMovimiento();
        }
    }
}