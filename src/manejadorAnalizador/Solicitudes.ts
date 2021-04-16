import noTerminal from './NoTerminals';
import terminal from './Terminal';
import Tabla from './Tabla';
class Solicitudes{
    private noTerminal_1: noTerminal;
    private listadoTerminales : terminal [] = [];
    private tabla:Tabla;
    private listadoErrores : any [];
    private simboloInicial:String;
    borrarDatosMemoria(){
        this.noTerminal_1 = null;
        this.listadoTerminales = null;
        this.tabla = null;
        this.listadoErrores = null;
    }
    constructor(listadoTerminales:any[],listadoNoTerminales:any[],listadoProducciones:any[],listadoPosicionesNuevasProd:any[],simboloInicial:any,listadoErrores:any[]){
        this.listadoErrores = listadoErrores;
        this.noTerminal_1 = new noTerminal(simboloInicial);
        this.simboloInicial = simboloInicial;
        for(var i in listadoTerminales){
            this.agregarTerminal(listadoTerminales[i][0],listadoTerminales[i][1],listadoTerminales[i][2]);
        }
        for(var i in listadoNoTerminales){
            this.agregarNoterminal(listadoNoTerminales[i]);
        }
        this.agregarProduccion(listadoProducciones,listadoPosicionesNuevasProd);   
        this.noTerminal_1.agregarPrimeros();
        this.noTerminal_1.agregarSiguientes();
        //constructor(nombresNoTerminales: String[], primeros: Primeros[], siguientes: Siguientes[], auxProd: AuxiliarProduccion[]) {
        this.tabla = new Tabla(this.noTerminal_1.getNombres,this.noTerminal_1.getPrimeros,this.noTerminal_1.getSiguientes,this.noTerminal_1.getAuxProd,listadoErrores,this.listadoTerminales,simboloInicial);
        this.tabla.crearTabla();        
    }
    //errores.push(['Sintactico','dato: '+yytext,'Linea '+yylloc.first_line,'columna '+yylloc.first_column]);
    get getListadoErrores():any[]{        
        return this.listadoErrores;
    }
    get getTabla():Tabla{        
        return this.tabla;
    }
    public agregarNoterminal(nombre:String){
        this.noTerminal_1.agregarNoTerminal(nombre);
    }
    public agregarProduccion(listadoProd:any[],listadoPosicionesNuevasProd:any[]){
        this.noTerminal_1.agregarProducciones(listadoProd,listadoPosicionesNuevasProd);
    }
    public agregarTerminal(nombre:String,expresion:String,cerradura:String){
        this.listadoTerminales.push(new terminal(nombre,expresion,cerradura));
    }
    public mostrarInformacion(){
        for(var i in this.listadoTerminales){
            console.log('Terminal #'+i+" Dato: "+this.listadoTerminales[i].getExpresionRegular);
        }
        this.noTerminal_1.mostrarDatos();
    }
}

module.exports.Solicitudes = Solicitudes;