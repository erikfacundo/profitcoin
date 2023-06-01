document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var montoInput = document.getElementById("monto");
    var gananciaPerdidaInput = document.getElementById("gananciaPerdida");
    var gananciaPerdidaPNLInput = document.getElementById("gananciaPerdidaPNL");
    var ingresarMontoButton = document.getElementById("ingresarMonto");
    var ingresarGananciaButton = document.getElementById("ingresarGanancia");
    var ingresarPerdidaButton = document.getElementById("ingresarPerdida");
    var ingresarGananciaPNLButton = document.getElementById("ingresarGananciaPNL");
    var ingresarPerdidaPNLButton = document.getElementById("ingresarPerdidaPNL");
    var resultadoDiv = document.getElementById("resultado");
    var actividadDiv = document.getElementById("actividad");
    var total = 0;
  
    // Funciones auxiliares
    function mostrarMensajeError(elemento) {
      var mensaje = "Por favor, ingrese un valor válido.";
      elemento.classList.add("error");
      elemento.setAttribute("placeholder", mensaje);
    }
  
    function actualizarTotal() {
      resultadoDiv.textContent = "$" + total.toFixed(2);
    }
  
    function agregarActividad(mensaje) {
      var p = document.createElement("p");
      p.textContent = mensaje;
      actividadDiv.appendChild(p);
    }
  
    // Evento de ingresar monto
    ingresarMontoButton.addEventListener("click", function() {
      var monto = parseFloat(montoInput.value);
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
      var ganancia = parseFloat(gananciaPerdidaInput.value);
      if (!isNaN(ganancia)) {
        total += ganancia;
        actualizarTotal();
        agregarActividad("Ingresada ganancia: $" + ganancia.toFixed(2));
        gananciaPerdidaInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaInput);
      }
    });
  
    // Evento de ingresar pérdida
    ingresarPerdidaButton.addEventListener("click", function() {
      var perdida = parseFloat(gananciaPerdidaInput.value);
      if (!isNaN(perdida)) {
        total -= perdida;
        actualizarTotal();
        agregarActividad("Ingresada pérdida: $" + perdida.toFixed(2));
        gananciaPerdidaInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaInput);
      }
    });
  
    // Evento de ingresar ganancia en PNL
    ingresarGananciaPNLButton.addEventListener("click", function() {
      var gananciaPNL = parseFloat(gananciaPerdidaPNLInput.value);
      if (!isNaN(gananciaPNL)) {
        var gananciaPorcentaje = (gananciaPNL / total) * 100;
        total += gananciaPNL;
        actualizarTotal();
        agregarActividad("Ingresada ganancia en PNL: $" + gananciaPNL.toFixed(2) + " (" + gananciaPorcentaje.toFixed(2) + "%)");
        gananciaPerdidaPNLInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaPNLInput);
      }
    });
  
    // Evento de ingresar pérdida en PNL
    ingresarPerdidaPNLButton.addEventListener("click", function() {
      var perdidaPNL = parseFloat(gananciaPerdidaPNLInput.value);
      if (!isNaN(perdidaPNL)) {
        var perdidaPorcentaje = (perdidaPNL / total) * 100;
        total -= perdidaPNL;
        actualizarTotal();
        agregarActividad("Ingresada pérdida en PNL: $" + perdidaPNL.toFixed(2) + " (" + perdidaPorcentaje.toFixed(2) + "%)");
        gananciaPerdidaPNLInput.value = "";
      } else {
        mostrarMensajeError(gananciaPerdidaPNLInput);
      }
    });
  });
  