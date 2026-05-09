function calcularInteres() {
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(cantidad) || cantidad <= 0) {
    resultado.innerHTML = "<p>Por favor, ingresa una cantidad válida.</p>";
    return;
  }

  let diasDelMes = 30;

  let calcularRendimientoDiario = (capital, tasaAnual) => {
    let tasaDiaria = tasaAnual / 365; 
    let total = capital;
    let rendimientoPrimerDia = capital * tasaDiaria;

    for (let dia = 1; dia <= diasDelMes; dia++) {
      total += total * tasaDiaria;
    }

    return {
      rendimientoPrimerDia: rendimientoPrimerDia,
      rendimientoTotal: total - capital,
      totalFinal: total,
    };
  };

  let interes15 = calcularRendimientoDiario(cantidad, 0.15);
  let interes9 = calcularRendimientoDiario(cantidad, 0.09);
  let interes135 = calcularRendimientoDiario(cantidad, 0.135);

  resultado.innerHTML = `
    <p><strong>Capital inicial:</strong> $${cantidad.toFixed(2)}</p>
    <hr>
    <p><strong>15% anual:</strong></p>
    <p>Rendimiento del primer día: $${interes15.rendimientoPrimerDia.toFixed(2)}</p>
    <p>Rendimiento en 30 días: $${interes15.rendimientoTotal.toFixed(2)}</p>
    <p>Total al día 30: $${interes15.totalFinal.toFixed(2)}</p>

    <p><strong>9% anual:</strong></p>
    <p>Rendimiento del primer día: $${interes9.rendimientoPrimerDia.toFixed(2)}</p>
    <p>Rendimiento en 30 días: $${interes9.rendimientoTotal.toFixed(2)}</p>
    <p>Total al día 30: $${interes9.totalFinal.toFixed(2)}</p>

    <p><strong>13.5% anual:</strong></p>
    <p>Rendimiento del primer día: $${interes135.rendimientoPrimerDia.toFixed(2)}</p>
    <p>Rendimiento en 30 días: $${interes135.rendimientoTotal.toFixed(2)}</p>
    <p>Total al día 30: $${interes135.totalFinal.toFixed(2)}</p>
  `;
}