addEventListener("DOMContentLoaded", (e) =>{
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();
        let numero1 = document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        let numero3 = document.getElementById("numero3").value;
        leer_dato(numero1, numero2, numero3); 
    })
})

function leer_dato(V1, V2, V3){
    if (V1 > V2 && V1 > V3){
        document.getElementById("resul").innerHTML = "El Numero Mayor es: " + V1;
    } else if (V2 > V1 && V2 > V3){
        document.getElementById("resul").innerHTML = "El Numero Mayor es: " + V2;
    }else{
        document.getElementById("resul").innerHTML = "El Numero Mayor es: " + V3;
    }
}