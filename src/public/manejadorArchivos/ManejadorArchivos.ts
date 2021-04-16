var salida = "";
function processFiles(files:any) {
    var file = files[0];

    var reader = new FileReader();

    reader.onload = (e) =>{
        // Cuando éste evento se dispara, los datos están ya disponibles.
        // Se trata de copiarlos a una área <div> en la página.
        const csv : string = reader.result as string;
        document.getElementById("fileInput").textContent = csv;
        llenarCampo(e.target.result);
    };
    reader.readAsText(file);
}
function llenarCampo(texto:any) {    
    var txt = texto;
    for (var i = 0; i < txt.length; i++) {
        salida += txt[i];
    }
    
    document.getElementById("textoArea").innerHTML = salida;
}