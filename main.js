addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {
            let num1 = document.getElementById("numero1").value;
            let num2 = document.getElementById("numero2").value;
            let num3 = document.getElementById("numero3").value;
            let num4 = document.getElementById("numero4").value;
            let num5 = document.getElementById("numero5").value;

            let promedio = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5))/5;
            document.getElementById("resultado").innerHTML = `el promedio es: ${promedio}`;
    }
    })
})