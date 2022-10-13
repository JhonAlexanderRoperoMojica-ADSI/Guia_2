addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();

        function validar() {

            let letra = document.getElementById("numero1").value;

            if ( letra == "A" && letra == "a") {
                let prec = prompt("Ingrese el precio");
                let desc = prec * 0.10;
                let tot = prec - desc;
                document.getElementById("resultado").innerHTML = `el total a pagar es: ${tot}`;
            }
            else if (letra == "B" && letra == "b") {
                let prec = prompt("Ingrese el precio");
                let desc = prec * 0.15;
                let tot = prec - desc;
                document.getElementById("resultado").innerHTML = `el total a pagar es: ${tot}`;
            }
            else if (letra == "C" && letra == "c") {
                let prec = prompt("Ingrese el precio");
                let desc = prec * 0.20;
                let tot = prec - desc;
                document.getElementById("resultado").innerHTML = `el total a pagar es: ${tot}`;
            }
            else {
                document.getElementById("resultado").innerHTML = "La letra es incorrecta";
            }
        }
    })
})