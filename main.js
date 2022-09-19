addEventListener("DOMContentLoaded", (e) =>{
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();
        let dato = document.getElementById("dato").value;
        leer_dato(dato);
    })
})

function leer_dato(numero){
    if (numero > 0 && numero < 100){
        document.getElementById("resul").innerHTML = "El Numero Ingresado es Positivo y es Menor a 100";
    } else{
        document.getElementById("resul").innerHTML = "El Numero Ingresado es Negativo o Mayor a 100";
    }
}