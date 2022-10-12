addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let consumo = document.getElementById("numero1").value;

            if (consumo >= 130000) {

                let descuento = consumo * 0.15;
                let total = consumo - descuento;

                document.getElementById('resultado').innerHTML = `Su Descuento es del 15%`;
                document.getElementById('resultado1').innerHTML = `Usted debe Pagar ${total} Pesos`;
            }
            else {
                document.getElementById("resultado").style.color = `No Tiene Descuento`;
                document.getElementById('resultado1').innerHTML = `Usted debe Pagar ${consumo} Pesos`;
            }
        }
    })
})