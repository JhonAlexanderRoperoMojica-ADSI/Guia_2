addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let lado1 = document.getElementById("numero1").value;
            let lado2 = document.getElementById("numero2").value;

            if((lado1 > 0) && (lado2 > 0)){
                let area = lado1 * lado2;
                document.getElementById('resultado').innerHTML = `El área del rectángulo es: ${area}`;
            }
            else{
                document.getElementById('resultado').innerHTML = `Los lados deben ser positivos.`;
            }
        }
    })
})