function calcular() {
    // Leo el radio que escribió el usuario y lo convierto a número.
    var radio = parseFloat(document.getElementById("radio").value);

    // Si el dato no sirve, aviso y no sigo con las fórmulas.
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor ingresa un radio válido");
        return;
    }

    // Con el radio ya validado, saco el área y la circunferencia del círculo.
    let area = Math.PI * Math.pow(radio, 2);
    let circunferencia = 2 * Math.PI * radio;

    document.getElementById("area").textContent = area.toFixed(2);
    document.getElementById("circunferencia").textContent = circunferencia.toFixed(2);
}