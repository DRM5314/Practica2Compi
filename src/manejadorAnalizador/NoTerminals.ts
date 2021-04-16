import auxiliaarProd from './AuxiliarProduccion';
import ManejadorSiguientes from './ManejadorSiguientes';
import ManejadorPrimeros from './ManejadorPrimeros';
import Primeros from './Primeros';
import Siguiente from './Siguientes';
export default class NoTerminals{
    private nombres:String [] = [];
    private auxiliaarProduccion : auxiliaarProd [] = [];
    private siguientes : Siguiente[];
    private primeros :Primeros[];
    private simbiloIicial: String;
    constructor(simboloInicial:any){
        this.simbiloIicial = simboloInicial;
    }
    public agregarNoTerminal(nombre:String){
        if(!this.nombres.includes(nombre)){
            this.nombres.push(nombre);
            this.auxiliaarProduccion.push(new auxiliaarProd(nombre));
        }
    }
    get getNombres():String[]{
        return this.nombres;
    }
    get getAuxProd():auxiliaarProd[]{
        return this.auxiliaarProduccion;
    }
    public agregarProducciones(prod:any[],posNuevasProd:any[]){
        var contador = 0;
        /*
        for(var e in prod){
            console.log('Derecho: '+prod[e][0]+' Tipo: '+prod[e][1]+' dato: '+prod[e][2]);
            if(e==posNuevasProd[contador]){
                contador++;
                console.log('Nueva produccion');
            }
        }
        */
        let agrupador:any [] = [];
        for(var i in prod){
            agrupador.push(prod[i]);
            var nombreAux:String = prod[i][0];            
            if(posNuevasProd[contador]==i){
                //console.log('Agrega prod de '+nombreAux+" con "+agrupador.length+" Prods")
                var pos:any = this.nombres.indexOf(nombreAux);
                this.auxiliaarProduccion[pos].agregarProduccionSubproduccion(agrupador);
                agrupador = [];
                contador++;
            }            
        }        
    }
    public agregarPrimeros(){
        this.primeros = new ManejadorPrimeros(this.auxiliaarProduccion,this.nombres).getListadoPrimeros;
        /*for(var i in this.auxiliaarProduccion){
            var listaoPrimerosNoterminales = this.auxiliaarProduccion[i].getPrimeros.getPrimerosNoTermianes;
            console.log('Va a agrgar primeros segunda fase y trae '+listaoPrimerosNoterminales.length);
            for(var a in listaoPrimerosNoterminales){
                console.log('esta analizando en'+listaoPrimerosNoterminales[a]+' agregar segunda fase')
                var posNoterminal = this.nombres.indexOf(listaoPrimerosNoterminales[a]);
                var terminales = this.auxiliaarProduccion[posNoterminal].getPrimeros.getPrimerosTerminales;
                this.auxiliaarProduccion[i].agregarPrimerosSegundaFase(terminales);
            }
        }
        */
        
    }    
    get getPrimeros ():Primeros[]{
        return this.primeros;
    }
    get getSiguientes():Siguiente[]{
        return this.siguientes;
    }
    public agregarSiguientes(){
        this.siguientes = new ManejadorSiguientes(this.nombres,this.auxiliaarProduccion,this.primeros,this.simbiloIicial).getSiguientes;
    }    
    public mostrarDatos(){        
        console.log('Simbolo inicial es '+this.simbiloIicial);
        for(var i in this.nombres){
            //console.log('El no terminal: '+this.nombres[i]+" isLambda "+this.auxiliaarProduccion[i].isLambda+' Tiene '+this.auxiliaarProduccion[i].getProducciones.length+" Son");
            //this.auxiliaarProduccion[i].mostrarProducciones();            
            this.primeros[i].mostrarInfoPrimerosTerminales();
            //console.log('Es ambigua: '+this.auxiliaarProduccion[i].getPrimeros.esAmbigua);            
            this.siguientes[i].mostrarDatos();
        }
    }    
}