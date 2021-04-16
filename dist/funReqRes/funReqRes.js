"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const analizador_1 = __importDefault(require("../jison/analizador"));
const ManejadorTabla_1 = __importDefault(require("../manejadorTabla/ManejadorTabla"));
//import solicitudes from '../manejadorAnalizador/Solicitudes';
//import TERMINAL from '../manejadorAnalizador/Terminal';
//import noTerminal from '../manejadorAnalizador/NoTerminals';
//import auxProduccion from '../manejadorAnalizador/AuxiliarProduccion';
//const ejecturoAnalizador = require('../jison/analizar');
//import {manejadorSolicitudes} from '../manejadorAnalizador/Solicitudes';
const editor = (req, res) => {
    /*
    var tt = [];
    tt.push(new TERMINAL("$_D","\"DAVID\"","*"));
    tt.push(new TERMINAL("$_D1","\"DAVID1\"","*"));
    tt.push(new TERMINAL("$_D2","\"DAVID2\"","*"));
    tt.length;
    
    for(var o in tt){
        console.log("Terminal: "+tt[o].getNombre+" Expresion: "+tt[o].getNombre);
    }
    
    var auxListadoProduccion :auxProduccion [] = [];
    auxListadoProduccion.push(new auxProduccion('T','$_Terminal'));
    auxListadoProduccion.push(new auxProduccion('T','$_Terminal1'));
    auxListadoProduccion.push(new auxProduccion('N','%_Prod_A'));
    auxListadoProduccion.push(new auxProduccion('N','%_Prod_B'));
    auxListadoProduccion.push(new auxProduccion('N','%_Prod_C'));
    var noTerminal1 : noTerminal = new noTerminal();
    noTerminal1.agregarNoTerminal("%_Prod_A");
    noTerminal1.agregarNoTerminal("%_Prod_B");
    noTerminal1.agregarNoTerminal("%_Prod_C");
    noTerminal1.agregarProduccion("%_Prod_B",auxListadoProduccion);
    noTerminal1.mostrarDatos();
    */
    res.render('editor', {
        'titulo': 'Editor',
        'mensaje': 'Bienvenido al sistema LL-PARSER',
        'entrada': ''
    });
};
const analizadores = (req, res) => {
    res.render('analizadores', {
        'titulo': 'Analizadores'
    });
};
const analizar = (req, res) => {
    var entradaTexto = req.body.textoArea;
    //console.log('analizo esto ');
    //console.log(entradaTexto);
    //let tabla1 = req.body.tabla;    
    //let fila = document.createElement('TR');
    //fila.innerHTML = salida;
    //document.getElementById("tabla").appendChild(fila);
    //console.log(entradaTexto);    
    let arregloErrores;
    try {
        var tabla;
        let solicitudes = analizador_1.default.parse(entradaTexto);
        solicitudes.mostrarInformacion();
        tabla = solicitudes.getTabla;
        let manejadorTabla = new ManejadorTabla_1.default(tabla);
        let arrergloPS = manejadorTabla.agregarPS;
        let arregloM = manejadorTabla.getMovimientos;
        arregloErrores = manejadorTabla.getErrores;
        let arregloTerminales = manejadorTabla.getTerminales;
        let ambigua = manejadorTabla.isAmbigua;
        let salida = "";
        if (ambigua) {
            salida = ":(La gramatica es ambigua)";
        }
        if (arregloErrores.length && entradaTexto != null) {
            res.render('errores', { 'arregloErrores': arregloErrores, "textoEntrada": entradaTexto });
        }
        else if (entradaTexto != null) {
            res.render('tablaResultado', { "arregloPS": arrergloPS, "arregloM": arregloM, "arregloTerminales": arregloTerminales, "ambigua": salida });
        }
        else {
            res.render('editor', {
                'titulo': 'Editor',
                'mensaje': 'No hay nada en la entrada',
                'entrada': ''
            });
        }
    }
    catch (err) {
        console.log('error irrecuperable en la entrada');
        res.render('editor', {
            'titulo': 'Editor',
            'mensaje': 'Existen errores irrecuperables en la entrada, es posible que la entrada no cumpla con lo minimo para su analisis',
            'entrada': entradaTexto
        });
    }
    /*
    //console.log('Tiene '+ejecutorAnalizador.noTerminales.length+' noTerminales');
    //console.log('Tiene '+ejecutorAnalizador.produccion.length+' producciones');
    //let arr = [] ;
    arr.push(["hola","hola","hola"]);
    arr.push(["hola1","hola1","hola1"]);
    arr.push(["hola2","hola2","hola2"]);
    
    for(var i in arr){
        for(var a in arr[i]){
            console.log(arr[i][a]);
        }
    }
    */
};
const regreso = (req, res) => {
    var texto = req.body.textoArea;
    res.render('editor', {
        'titulo': 'Editor',
        'mensaje': 'Bienvenido al sistema LL-PARSER',
        "entrada": texto
    });
};
const editorUsuario = (req, res) => {
    var texto = req.body.textoArea;
};
exports.default = { editor, analizadores, analizar, regreso };
//# sourceMappingURL=funReqRes.js.map