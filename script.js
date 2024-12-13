// Datos dinámicos para las opciones
const infoData = {
    info1: "Tomar copia de Solicitud de cita Urologia incluida C.S. / Registrar en copia si Dr. es C.S.",
    info2: "Aquí está la información de la opción 2.",
    info3: "Descripción detallada para la opción 3. Puedes modificar esta información fácilmente."
};

// Referencia al menú y al área de despliegue
const menu = document.getElementById("menu");
const infoDisplay = document.getElementById("info-display");

// Actualizar la información al cambiar la opción
menu.addEventListener("change", () => {
    const selectedOption = menu.value;
    infoDisplay.innerHTML = `<p>${infoData[selectedOption]}</p>`;
});
