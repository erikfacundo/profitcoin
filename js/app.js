document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const montoInput = document.getElementById("monto");
    const gananciaPerdidaInput = document.getElementById("gananciaPerdida");
    const gananciaPerdidaPNLInput = document.getElementById("gananciaPerdidaPNL");
    const ingresarMontoButton = document.getElementById("ingresarMonto");
    const ingresarGananciaButton = document.getElementById("ingresarGanancia");
    const ingresarPerdidaButton = document.getElementById("ingresarPerdida");
    const ingresarGananciaPNLButton = document.getElementById("ingresarGananciaPNL");
    const ingresarPerdidaPNLButton = document.getElementById("ingresarPerdidaPNL");
    const resetButton = document.getElementById("reset");
    const resultadoDiv = document.getElementById("resultado");
    const actividadDiv = document.getElementById("actividad");
    let total = 0;
    let pnl = 0;
  
    // Funciones auxiliares
    function mostrarMensajeError(elemento) {
      const mensaje = "Por favor, ingrese un valor válido.";
      elemento.classList.add("error");
      elemento.setAttribute("placeholder", mensaje);
    }
  
    function actualizarTotal() {
      resultadoDiv.textContent = "$" + (total - pnl).toFixed(2);
    }
  
    function agregarActividad(mensaje) {
      const p = document.createElement("p");
      p.innerHTML = mensaje;
      actividadDiv.appendChild(p);
    }
  
    function resetearValores() {
      montoInput.value = "";
      gananciaPerdidaInput.value = "";
      gananciaPerdidaPNLInput.value = "";
      total = 0;
      pnl = 0;
      actualizarTotal();
      actividadDiv.innerHTML = "";
      montoInput.classList.remove("error");
      gananciaPerdidaInput.classList.remove("error");
      gananciaPerdidaPNLInput.classList.remove("error");
    }
  
    // Evento de ingresar monto
    ingresarMontoButton.addEventListener("click", function() {
      const monto = parseFloat(montoInput.value);
      if (!isNaN(monto)) {
        total += monto;
        actualizarTotal();
        agregarActividad("Ingresado monto: $" + monto.toFixed(2));
        montoInput.value = "";
      } else {
        mostrarMensajeError(montoInput);
      }
    });
  
    // Evento de ingresar ganancia
    ingresarGananciaButton.addEventListener("click", function() {
      const ganancia = parseFloat(gananciaPerdidaInput.value);
      if (!isNaN(ganancia)) {
        total -= ganancia;
        actualizarTotal();
        agregarActividad("Ingresada ganancia: $" + ganancia.toFixed(2));
        gananciaPerdidaInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaInput);
      }
    });
  
    // Evento de ingresar pérdida
    ingresarPerdidaButton.addEventListener("click", function() {
      const perdida = parseFloat(gananciaPerdidaInput.value);
      if (!isNaN(perdida)) {
        total += perdida;
        actualizarTotal();
        agregarActividad("Ingresada pérdida: $" + perdida.toFixed(2));
        gananciaPerdidaInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaInput);
      }
    });
  
    // Evento de ingresar ganancia en PNL
    ingresarGananciaPNLButton.addEventListener("click", function() {
      const gananciaPNL = parseFloat(gananciaPerdidaPNLInput.value);
      if (!isNaN(gananciaPNL)) {
        const gananciaPorcentaje = (gananciaPNL / 100) * total;
        pnl -= gananciaPorcentaje;
        actualizarTotal();
        agregarActividad("Ingresada ganancia en PNL: " + gananciaPNL.toFixed(2) + "% ($" + gananciaPorcentaje.toFixed(2) + ")");
        gananciaPerdidaPNLInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaPNLInput);
      }
    });
  
    // Evento de ingresar pérdida en PNL
    ingresarPerdidaPNLButton.addEventListener("click", function() {
      const perdidaPNL = parseFloat(gananciaPerdidaPNLInput.value);
      if (!isNaN(perdidaPNL)) {
        const perdidaPorcentaje = (perdidaPNL / 100) * total;
        pnl += perdidaPorcentaje;
        actualizarTotal();
        agregarActividad("Ingresada pérdida en PNL: " + perdidaPNL.toFixed(2) + "% ($" + perdidaPorcentaje.toFixed(2) + ")");
        gananciaPerdidaPNLInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaPNLInput);
      }
    });
  
    // Evento de resetear valores
    resetButton.addEventListener("click", function() {
      resetearValores();
    });
  });
  