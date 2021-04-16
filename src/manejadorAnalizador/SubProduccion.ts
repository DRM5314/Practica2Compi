export default class SubProduccion{    
    private tipo:String;
    private nombre:String;
    private tieneLambda:boolean;
    private lambda:String = "no";
    constructor (tipo:String,nombre:String,padreLambda:String){
        this.tipo = tipo;
        this.nombre = nombre;
        this.lambda = nombre;
        var aux:boolean = false;
        if(nombre=="lambda"){
            this.nombre = padreLambda;
            //console.log('Agrego lambda de prod');
            aux = true;
        }
        this.tieneLambda = aux;
    }
    get getLambda():String{
        return this.lambda;
    }
    get getIsLambda():boolean{
        return this.tieneLambda;
    }
    get getNombre():String{
        return this.nombre;
    }
    get getTipo():String{
        return this.tipo;
    }
}