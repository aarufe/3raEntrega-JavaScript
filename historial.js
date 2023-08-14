document.addEventListener("DOMContentLoaded", () => {
  const historialContainer = document.getElementById("historial");

  const guardar = JSON.parse(localStorage.getItem("resultados"));

  if (guardar) {
    historialContainer.innerHTML = "<h3>Cálculos Anteriores:</h3>";
    for (const color in guardar) {
      historialContainer.innerHTML += `<p>Color: ${color}, Litros de Pintura: ${guardar[color].toFixed(2)}</p>`;
    }
  } else {
    historialContainer.innerHTML = "<p>No hay cálculos anteriores disponibles.</p>";
  }
});
