
async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    // console.log(respuesta);
    const datos = await respuesta.json();
    // console.log(datos);
    console.log(datos.results[0].name.last)
}

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