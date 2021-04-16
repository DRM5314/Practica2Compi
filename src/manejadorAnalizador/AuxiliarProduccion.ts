import Produccion from './Produccion';
import Primeros from './Primeros';
import SubProduccion from './SubProduccion';
export default class AuxiliarProduccion {
    private padre: String;
    private produccion_1: Produccion[] = [];
    private primeros: Primeros;
    private seHaceLambda:boolean = false;
    constructor(padre: String) {
        this.padre = padre;
        this.primeros = new Primeros(padre);
    }
    get getPosTerminales():any[]{
        var posTerminales = [];
        for(var i in this.produccion_1){
            if(this.produccion_1[i].getPrimerSubProduccion.getTipo=="T"){
                posTerminales.push(i);
            }
        }
        return posTerminales;
    }
    
    get isLambda():boolean{
        return this.seHaceLambda;
    }
    get getPadre(): String {
        return this.padre;
    }    
    public agregarProduccionSubproduccion(listado: any[]) {
        var listadoAux = [];
        var contador = 0;        
        for (var a in listado) {
            if (!(listado[a][1] == "separador")) {
                listadoAux.push(listado[a]);                
                if ((listado[a][2] == "lambda"))contador++;
            } else {
                this.produccion_1.push(new Produccion(listadoAux));
                listadoAux = [];
            }
        }
        this.produccion_1.push(new Produccion(listadoAux));        
        if(contador>0)this.seHaceLambda = true;
    }
    private agregarPrimeros(a:any) {                        
        /*for (var i in this.produccion_1) {
            var primerSubprod = this.produccion_1[i].getPrimerSubProduccion;
            if (primerSubprod.getTipo == "T") this.primeros.agregarPrimerosTerminales(primerSubprod.getNombre);
            else {
                var auxPrimerosLabda = [];                
                if (primerSubprod.getIsLambda) {
                    for (var a in this.produccion_1[i].obtenerSubproduccion) {
                        var prodAux = this.produccion_1[i].obtenerSubproduccion[a];
                        if(prodAux.getIsLambda){
                            auxPrimerosLabda.push(prodAux);                            
                        }else{
                            if(prodAux.getTipo=="T"){
                                this.primeros.agregarPrimerosTerminales(primerSubprod.getNombre);
                            }else {
                                for(var b in auxPrimerosLabda){
                                    this.primeros.agregarPrimerosNoTerminales([auxPrimerosLabda[b].getNombre, auxPrimerosLabda[b].getIsLambda]);
                                    auxPrimerosLabda = [];
                                }
                            }
                        }
                    }
                } else {
                    this.primeros.agregarPrimerosNoTerminales([primerSubprod.getNombre,primerSubprod.getIsLambda]);
                }
            }
        }
        */
    }
    /*
    agregarPrimerosSegundaFase(listadoPrimeros: any[]) {
        for (var i in listadoPrimeros) {
            this.primeros.agregarPrimerosTerminales(listadoPrimeros[i]);
        }
    }
    */
    get getProducciones(): Produccion[] {
        return this.produccion_1;
    }
    get getPrimeros(): Primeros {
        return this.primeros;
    }
    mostrarProducciones() {
        for (var i in this.produccion_1) {
            console.log("Produccion# "+i);
            this.produccion_1[i].mostrarDatos();
        }
    }
}