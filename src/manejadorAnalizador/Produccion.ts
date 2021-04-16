import subProduccion from './SubProduccion';
export default class produccion{
    private datosProd: subProduccion [] = [];
    private seHaceLambda:boolean = false;
    constructor(datos:any[]){
        for(var i in datos){
            this.datosProd.push(new subProduccion(datos[i][1],datos[i][2],datos[i][0]));            
        }        
    }
    get obtenerSubproduccion():subProduccion[]{
        return this.datosProd;
    }
    get isHaceLambda():boolean{
        return this.seHaceLambda;
    }
    get getPrimerSubProduccion():subProduccion{
        return this.datosProd[0];
    }    
    mostrarDatos(){
        for(var i in this.datosProd){
            var nombre = this.datosProd[i].getNombre;
            if(this.datosProd[i].getIsLambda){
                console.log("   Tipo "+this.datosProd[i].getTipo+" Dato: lambda");
            }else{
                console.log("   Tipo "+this.datosProd[i].getTipo+" Dato: "+nombre);
            }
            
        }
    }
}