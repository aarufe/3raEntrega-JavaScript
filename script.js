document.addEventListener("DOMContentLoaded", () => {
  const pintForm = document.getElementById("pintForm");
  const ambInputs = document.getElementById("ambInputs");
  const output = document.getElementById("output");
  const clearBtn = document.getElementById("clearBtn");

  pintForm.addEventListener("submit", function (e) {
    e.preventDefault();
    output.innerHTML = ""; // Clear previous output

    const numambs = parseInt(document.getElementById("numambs").value);
    let totallitros = {};

    for (let i = 1; i <= numambs; i++) {
      const ambDiv = document.createElement("div");
      ambDiv.classList.add("mt-3");
      ambDiv.innerHTML = `
        <h4>Ambiente ${i}</h4>
        <div class="form-group">
          <label for="ambName${i}">Nombre del Ambiente:</label>
          <input type="text" class="form-control" id="ambName${i}" required>
        </div>
        <div class="form-group">
          <label for="ambColor${i}">Color:</label>
          <input type="text" class="form-control" id="ambColor${i}" required>
        </div>
        <div class="form-group">
          <label for="ambArea${i}">Metros Cuadrados:</label>
          <input type="number" class="form-control" id="ambArea${i}" required>
        </div>
        <div class="form-group">
          <label for="ambHands${i}">Cantidad de Manos:</label>
          <input type="number" class="form-control" id="ambHands${i}" required>
        </div>
      `;

      ambInputs.appendChild(ambDiv);

      const ambArea = parseFloat(document.getElementById(`ambArea${i}`).value);
      const ambHands = parseFloat(document.getElementById(`ambHands${i}`).value);
      const ambColor = document.getElementById(`ambColor${i}`).value;

      const litros = ambArea * ambHands * 0.11;
      if (totallitros[ambColor]) {
        totallitros[ambColor] += litros;
      } else {
        totallitros[ambColor] = litros;
      }
    }

    // Display total litros by color
    output.innerHTML = "<h2>Resultados:</h2>";
    for (const color in totallitros) {
      output.innerHTML += `<p>Color: ${color}, Litros de Pintura: ${totallitros[color].toFixed(2)}</p>`;
    }

    // Store results in local storage
    localStorage.setItem("resultados", JSON.stringify(totallitros));
  });

  clearBtn.addEventListener("click", function () {
    ambInputs.innerHTML = "";
    output.innerHTML = "";
    pintForm.reset();
  });
});
