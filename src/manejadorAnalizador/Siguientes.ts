export default class Siguiente{
    private padre:String;
    private listadoSiguientesTerminales:String[] = [];
    private listadoSiguientesNoTerminales:String[] = [];
    private listadoSiguienteDelSiguiente:String[] = [];
    constructor(padre:String){
        this.padre = padre;
    }
    get getPadre():String{
        return this.padre;
    }
    get getSiguienteDelSiguiente():String[]{
        return this.listadoSiguienteDelSiguiente;
    }
    agregarSiguienteDelSiguiente(entrada:String){
        this.listadoSiguienteDelSiguiente.push(entrada);
    }
    agregarSiguienteTerminal(dato:String){
        if(dato!="lambda")this.listadoSiguientesTerminales.push(dato);
    }
    agregarSiguientesTerminales(datos:String[]){
        for(var i in datos){
            if(datos[i]!="lambda")this.listadoSiguientesTerminales.push(datos[i]);
        }        
    }
    agregarSiguienteNoTerminal(dato:String){
        this.listadoSiguientesNoTerminales.push(dato);
    }
    mostrarDatos(){
        console.log('los siguientes de '+this.padre+" son ");
        if(this.listadoSiguientesTerminales.length>0){
            for(var i in this.listadoSiguientesTerminales){
                console.log(this.listadoSiguientesTerminales[i]);
            }
        }else{
            console.log('No tiene siguientesDirectos directos');
        }
    }
    get getListadoSiguientes():String[]{
        return this.listadoSiguientesTerminales;
    }
    get getListadoSiguientesNoTerminales():String[]{
        return this.listadoSiguientesNoTerminales;
    }
}