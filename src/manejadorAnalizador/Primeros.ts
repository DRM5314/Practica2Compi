export default class Primeros{
    private listadoPrimerosTerminales:String[] = [];
    private listadoPrimerosNoterminales:any [] = [];
    private listadoPrimerosNoterminalesNombres:String [] = [];
    private padre:String;
    constructor(padre:String){
        this.padre = padre;        
    }
    public agregar_A_PrimerosTerminales(dato:String){
        this.listadoPrimerosTerminales.push(dato);
    }
    public agregar_A_PrimerosTerminales_EnLista(dato:String[]){
        for(var i in dato){
            if(dato[i]!="lambda")this.agregar_A_PrimerosTerminales(dato[i]);
        }
    }
    get getPadre():String{
        return this.padre;
    }
    public agregarPrimerosNoTerminales(dato:any[]){
        //console.log("Ingreso "+dato[0]+" "+dato[1]+" "+dato[2])
        this.listadoPrimerosNoterminales.push(dato);
        this.listadoPrimerosNoterminalesNombres.push(dato[0]);
    }
    get esAmbigua():boolean{
        return this.repetidos(this.listadoPrimerosTerminales) || this.repetidos(this.listadoPrimerosNoterminalesNombres);
    }
    private repetidos(arr:any[]){
        return arr.some(function(v,i) { return arr.indexOf(v,i+1)>-1 })
      }
    get getPrimerosTerminales():String[]{
        return this.listadoPrimerosTerminales;
    }
    get getPrimerosNoTermianes():any[]{
        return this.listadoPrimerosNoterminales;
    }
    public mostrarInfoPrimerosTerminales(){
        console.log('los primeros de '+this.padre+" son ");
        if(this.listadoPrimerosTerminales.length>0){
            for(var i in this.listadoPrimerosTerminales){
                console.log(this.listadoPrimerosTerminales[i]);
            }
        }else{
            console.log('No tiene directos');
        }
    }
}