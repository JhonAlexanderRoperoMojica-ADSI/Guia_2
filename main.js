function comprobar(seleccionado) {
    if (seleccionado == "Triangulo") {
        document.querySelector("#formTriangulo").style.display = 'block';
    }
    document.querySelector("#formCirculo").style.display = 'block';
}
let seleccionado;
addEventListener("DOMContentLoaded", (e) => {
    let dato = document.querySelector("#dato");
    dato.addEventListener("change", (e) => {
        document.querySelector("#formTriangulo").style.display = 'none';
        document.querySelector("#formCirculo").style.display = 'none';
        seleccionado = dato.value;
        comprobar(seleccionado);
    })
})
addEventListener("DOMContentLoaded", (e) => {
    let area = document.querySelector("#area");
    area.addEventListener("submit", (e) => {
        e.preventDefault();
        if (seleccionado == "Triangulo") {
            let base = document.querySelector("#Base").value;
            let altura = document.querySelector("#Altura").value;
            let area = (base * altura) / 2;
            document.querySelector("#resultado").innerHTML = area;
        } else if (seleccionado == "Circulo") {
            let radio = document.querySelector("#Radio").value;
            let area = Math.PI * radio * radio;
            document.querySelector("#resultado").innerHTML = area;
        } else {
            alert("No se puede acceder si escoger una figura...")
        }
    })
})