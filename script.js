// Función para calcular los carbohidratos
function calcularCarbohidratos() {
  var masa = parseFloat(document.getElementById("masa").value);
  var duracion = parseFloat(document.getElementById("duracion").value);
  var cantidadCarbohidratos = "";
  var tipoCHORecomendados = "";
  var informacionAdicional = "";

  if (duracion >= 0 && duracion <= 75) {
    cantidadCarbohidratos = "Mínima cantidad";
    tipoCHORecomendados = "Única o múltiple fuentes de CHO";
    informacionAdicional = "Entrenamiento nutricional recomendable";
  } else if (duracion > 75 && duracion <= 120) {
    cantidadCarbohidratos = (masa * 0.5).toFixed(0) + " g CHO / h";
    tipoCHORecomendados = "Única o múltiple fuentes de CHO";
    informacionAdicional = "Entrenamiento nutricional recomendado";
  } else if (duracion > 120 && duracion <= 180) {
    cantidadCarbohidratos = (masa * 1).toFixed(0) + " g CHO / h";
    tipoCHORecomendados = "Única o múltiple fuentes de CHO";
    informacionAdicional = "Entrenamiento nutricional altamente recomendado";
  } else if (duracion > 180 && duracion <= 1440) {
    cantidadCarbohidratos = (masa * 1.5).toFixed(0) + " g CHO / h";
    tipoCHORecomendados = "Múltiple fuentes de CHO";
    informacionAdicional = "Entrenamiento nutricional esencial";
  }

  var cantidadCarbohidratosElement = document.getElementById(
    "cantidadCarbohidratos"
  );
  var tipoCHORecomendadosElement = document.getElementById(
    "tipoCHORecomendados"
  );
  var informacionAdicionalElement = document.getElementById(
    "informacionAdicional"
  );

  cantidadCarbohidratosElement.textContent = cantidadCarbohidratos;
  tipoCHORecomendadosElement.textContent = tipoCHORecomendados;
  informacionAdicionalElement.textContent = informacionAdicional;

  var resultadoElement = document.getElementById("resultado");
  resultadoElement.classList.add("mostrar");

  if (cantidadCarbohidratos.includes("g CHO / h")) {
    cantidadCarbohidratosElement.classList.add("blue");
  }

  if (tipoCHORecomendados === "Múltiple fuentes de CHO") {
    tipoCHORecomendadosElement.classList.add("rojo");
  } else if (tipoCHORecomendados === "Única o múltiple fuentes de CHO") {
    tipoCHORecomendadosElement.classList.add("naranja");
  }

  // Quitar todas las clases de color de "informacionAdicionalElement" antes de añadir la correcta
  informacionAdicionalElement.classList.remove("amarillo", "naranja", "rojo");

  // Aplicar estilos para "Información adicional"
  if (informacionAdicional === "Entrenamiento nutricional recomendable") {
    informacionAdicionalElement.classList.add("amarillo");
  } else if (
    informacionAdicional === "Entrenamiento nutricional altamente recomendable"
  ) {
    informacionAdicionalElement.classList.add("naranja");
  } else if (informacionAdicional === "Entrenamiento nutricional esencial") {
    informacionAdicionalElement.classList.add("rojo");
  }
}

// Función para cambiar el idioma
function changeLanguage(language) {
  // Establecer el atributo lang del cuerpo del documento según el idioma seleccionado
  document.body.setAttribute("lang", language);

  // Cambiar el título según el idioma seleccionado
  document.getElementById("title").textContent =
    language === "es"
      ? "Cálculo de la ingesta de carbohidratos (CHO) en competición"
      : "Calculation of Carbohydrate (CHO) Intake during Competition";

  // Cambiar etiquetas del formulario según el idioma seleccionado
  document.getElementById("masa-label").textContent =
    language === "es" ? "Masa corporal (kg):" : "Body Mass (kg):";
  document.getElementById("duracion-label").textContent =
    language === "es"
      ? "Duración del ejercicio (minutos):"
      : "Exercise Duration (minutes):";
  document.getElementById("calculate-button").textContent =
    language === "es" ? "Calcular CHO" : "Calculate CHO";

  // Cambiar etiquetas de resultados según el idioma seleccionado
  document.getElementById("carbo-quantity-label").textContent =
    language === "es"
      ? "La cantidad de CHO que tienes que ingerir es de: "
      : "The amount of CHO you need to ingest is: ";
  document.getElementById("carbo-type-label").textContent =
    language === "es"
      ? "El tipo de CHO recomendados son: "
      : "Recommended CHO types are: ";
  document.getElementById("additional-info-label").textContent =
    language === "es" ? "Información adicional: " : "Additional information: ";

  // Cambiar texto del footer según el idioma seleccionado
  document.getElementById("footer-text").textContent =
    language === "es"
      ? "Creado por Non functional fatigue®"
      : "Created by Non functional fatigue®";
}
