
function funcionAlerta(){
    alert("di click");
}

function quitarSITEC(){
    //let pregunta = confirm("Seguro de quitar SITEC?");
    if(confirm("Seguro de quitar SITEC?")){
        alert("SITEC Borrado .... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiiaaaale";

    }
}

// alert("Alerta en archivo externo javascript");
/* 
varias lineas de comentarios
*/