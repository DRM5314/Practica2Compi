export default class terminal{
    private nombreTerminal:String;
    private expresionRegular:String;
    private cerradura:String;
    constructor(nombre:String,expresion:String,cerradura:String){
        this.nombreTerminal = nombre;
        this.expresionRegular = expresion;
        this.cerradura = cerradura;
    }
    get getNombre():String{
        return this.nombreTerminal;
    }
    get getExpresionRegular():String{
        return this.expresionRegular;
    }
    get getCerradura():String{
        return this.cerradura;
    }
}