function calcular() {
    var radio = parseFloat(document.getElementById("radio").value);

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor ingresa un radio válido");
        return;
    }

    let area = Math.PI * Math.pow(radio, 2);
    let circunferencia = 2 * Math.PI * radio;

    document.getElementById("area").textContent = area.toFixed(2);
    document.getElementById("circunferencia").textContent = circunferencia.toFixed(2);
}