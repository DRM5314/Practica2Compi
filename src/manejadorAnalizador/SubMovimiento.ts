import SubProduccion from './SubProduccion';
export default class subMovimiento{
    //con que, hacia donde 
    private haciaDonde:SubProduccion[];
    private conquien:String ;
    constructor (conQuien:String,haciaDonde:SubProduccion[]){
        this.conquien = conQuien;
        this.haciaDonde = haciaDonde;
    }
    get getHaciaDonde():String[]{
        let retorno:String[] = [];
        for(var i in this.haciaDonde){
            let lmabda = this.haciaDonde[i].getLambda;
            if(lmabda!="lambda"){
                retorno.push(lmabda)
            }else {
                retorno.push("labmda");
            }
        }
        return retorno;
    }
    get getConQuien():String{
        return this.conquien;
    }
    mostrarInfoSubMovimiento(){
        console.log('mueve con '+this.conquien+" hacia ");
        for(var a in this.haciaDonde){
            let lmabda = this.haciaDonde[a].getLambda;
            if(lmabda!="lambda"){
                console.log(this.haciaDonde[a].getNombre);
            }else {
                console.log('lambda');
            }
            
        }
    }
}