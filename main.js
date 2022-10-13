addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {
            
            let numero1 = Number(document.getElementById("numero1").value);
            let numero2 = Number(document.getElementById("numero2").value);

            if (numero1 > numero2) {
                let resta = numero1 - numero2;
                document.getElementById("resultado").innerHTML = `la resta es: ${resta}`;
            }
            else {
                document.getElementById("resultado").innerHTML = "No ha sido posible realizar la operación, el primer número debe ser mayor que el segundo.";
            }
        }
    })
})