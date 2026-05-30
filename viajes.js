const prompt = require('prompt-sync')();

let presupuestoCOP = Number(prompt("Ingrese el monto en pesos (COP): "));
let divisaSeleccionada = prompt("Ingrese la divisa de destino (USD o EUR): ").toUpperCase();

function procesarCambioViaje(dineroCOP, destinoDivisa) {
    let fondosConvertidos;

    if (destinoDivisa === "USD") {
        fondosConvertidos = dineroCOP / 4000; 

    } else if (destinoDivisa === "EUR") {
        fondosConvertidos = dineroCOP / 4500; 

    } else {
        return "Error: La divisa ingresada no está disponible para este viaje.";
    }

    return fondosConvertidos.toFixed(2);
}

const presupuestoFinal = procesarCambioViaje(presupuestoCOP, divisaSeleccionada);

console.log("---------------------------------------");
console.log(`Resultado de la conversión: ${presupuestoFinal}`);
console.log("---------------------------------------");